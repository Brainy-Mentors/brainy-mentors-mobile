import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ScreenBase from "../ScreenBase";
import { useRoute } from "@react-navigation/native";
import NavChat from "../../components/ui/navigation/NavChat";
import theme from "../../theme";
import Button from "../../components/ui/common/Button";
import chatService from "../../services/chat/ChatService";
import Message from "../../components/ui/message/Message";
import { insertMessage, getAllMessagesByMentorId } from "../../data/database";
import AppContext from "../../context/AppContext";
import { useTranslation } from "react-i18next";

export default function Chat() {
  const { t } = useTranslation("global");
  const route = useRoute();
  const { params } = route;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [mentorID, setmentorID] = useState(params.mentor.id);
  const { lang } = useContext(AppContext);

  const handleSubmit = () => {
    let textToSend = inputText;
    setInputText("");
    addMessage(mentorID, textToSend, true);
    handleChat(textToSend);
  };

  useEffect(() => {
    refreshMessages(mentorID);
  }, []);

  const refreshMessages = (mentorId) => {
    getAllMessagesByMentorId(mentorId, (data) => setMessages(data));
  };

  const addMessage = (mentorId, text, isCurrentUser) => {
    console.log(mentorId, text, isCurrentUser, "addmessage!");
    insertMessage(mentorId, text, isCurrentUser, () => {
      refreshMessages(mentorID);
    });
  };

  const contextMessages = () => {
    console.log();
    refreshMessages(mentorID);
    let lastMessages = messages?.slice(-3).map((message) => {
      return {
        role: message?.isCurrentUser ? "user" : "system",
        content: message?.text,
      };
    });
    return lastMessages;
  };

  async function handleChat(message) {
    const conversationContext = contextMessages();
    console.log(conversationContext)
    const { data } = await chatService.chat(mentorID, message, lang,conversationContext);
    addMessage(mentorID, data.choices[0].message.content, false);
    refreshMessages(mentorID);
  }

  return (
    <>
      <ScreenBase complete>
        <NavChat />
        <ScrollView style={styles.containerChat}>
          <Message
            isCurrentUser={false}
            text={t(`mentors.${mentorID}.initialMessage`)}
            sederName={params?.mentor?.name}
          />
          {messages.map((message, index) => {
            return message.mentorId == params?.mentor?.id ? (
              <View styles={{ width: "100%" }} key={index}>
                <Message
                  isCurrentUser={message?.isCurrentUser}
                  text={message.text}
                  sederName={params?.mentor?.name}
                />
              </View>
            ) : null;
          })}
        </ScrollView>
      </ScreenBase>
      <View style={styles.bottomContainer}>
        <TextInput
          onChangeText={(text) => setInputText(text)}
          placeholder="Tu mensaje..."
          style={styles.textInput}
          value={inputText}
        ></TextInput>
        <Button title={"Enviar"} secondary onPress={handleSubmit} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerChat: {
    marginBottom: 150,
  },
  bottomContainer: {
    backgroundColor: theme.colors.backgroundBase,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 16,
    width: "100%",
    gap: 8,
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    paddingHorizontal: 8,
    flex: 1,
  },
});
