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
import TextStyled from "../../components/ui/common/TextStyled";
import AdContext from "../../context/AdContext";

export default function Chat() {
  const { t } = useTranslation("global");
  const route = useRoute();
  const { params } = route;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const [mentorID, setmentorID] = useState(params.mentor.id);
  const { lang, setIsOpenModalReward, tokensCount, setTokensCount } =
    useContext(AppContext);

  const [isTyping, setIsTyping] = useState(false);
  const [canSendMessage, setCanSendMessage] = useState(true);

  const handleSubmit = () => {
    let textToSend = inputText;

    if (canSendMessage === true && inputText.length > 0) {
      setInputText("");
      let nTokens = parseInt(tokensCount) - 1;
      setTokensCount(nTokens.toString());
      addMessage(mentorID, textToSend, true);
      handleChat(textToSend);
      setIsTyping(true);
    }
    if (canSendMessage === false) {
      setIsOpenModalReward(true);
    }
  };

  useEffect(() => {
    refreshMessages(mentorID);
    haveTokens();
  }, []);

  const haveTokens = () => {
    parseInt(tokensCount) > 0
      ? setCanSendMessage(true)
      : setCanSendMessage(false);
  };

  const refreshMessages = (mentorId) => {
    getAllMessagesByMentorId(mentorId, (data) => setMessages(data));
    haveTokens();
  };

  const addMessage = (mentorId, text, isCurrentUser) => {
    insertMessage(mentorId, text, isCurrentUser, () => {
      refreshMessages(mentorID);
    });
  };

  const contextMessages = () => {
    refreshMessages(mentorID);
    let lastMessages = messages?.slice(-3).map((message) => {
      return {
        role: message?.isCurrentUser ? "user" : "system",
        content: message?.text,
      };
    });
    return lastMessages;
  };

  const handleInputChange = (text) => {
    haveTokens();
    if (text.length < 250) {
      setInputText(text);
    }
  };

  async function handleChat(message) {
    const conversationContext = contextMessages();
    const { data } = await chatService.chat(
      mentorID,
      message,
      lang,
      conversationContext
    );
    addMessage(mentorID, data.choices[0].message.content, false);
    setIsTyping(false);
    refreshMessages(mentorID);
    haveTokens();
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
          {isTyping && (
            <Message
              isCurrentUser={false}
              text={t(`chat.writing`)}
              sederName={params?.mentor?.name}
            />
          )}
        </ScrollView>
      </ScreenBase>
      <View style={styles.bottomContainer}>
        <View style={{ flex: 1, position: "relative" }}>
          <TextInput
            onChangeText={(text) => handleInputChange(text)}
            placeholder="Tu mensaje..."
            style={styles.textInput}
            value={inputText}
          />
          <TextStyled
            color={"black"}
            style={{
              position: "absolute",
              right: 10,
              bottom: 2,
              opacity: 0.5,
              fontSize: 10,
            }}
          >
            {inputText.length}/250
          </TextStyled>
        </View>
        <Button
          title={"Enviar"}
          secondary
          onPress={handleSubmit}
          inactive={!canSendMessage}
        />
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
