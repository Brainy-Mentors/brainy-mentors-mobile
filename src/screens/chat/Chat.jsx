import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ScreenBase from "../ScreenBase";
import { useRoute } from "@react-navigation/native";
import NavChat from "../../components/ui/navigation/NavChat";
import theme from "../../theme";
import Button from "../../components/ui/common/Button";
import chatService from "../../services/chat/ChatService";
import axios from "axios";
import Message from "../../components/ui/message/Message";
import {
  setupDatabase,
  insertMessage,
  getAllMessages,
  getAllMessagesByMentorId,
} from "../../data/database";

export default function Chat() {
  const route = useRoute();
  const { params } = route;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [mentorID, setmentorID] = useState(params.mentor.id);

  const handleSubmit = () => {
    let textToSend = inputText;

    console.log(textToSend, "text")
    setInputText("");
    addMessage(mentorID, textToSend, true);
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

  return (
    <>
      <ScreenBase complete>
        <NavChat />
        <ScrollView style={styles.containerChat}>
          {messages.map((message, index) => {
            return message.mentorId == params.mentor.id ? (
              <View styles={{ width: "100%" }} key={index}>
                <Message
                  isCurrentUser={message?.isCurrentUser}
                  text={message.text}
                  sederName={message?.sederName}
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
    marginBottom: 140,
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
