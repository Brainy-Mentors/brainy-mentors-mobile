import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ScreenBase from "../ScreenBase";
import { useRoute } from "@react-navigation/native";
import NavChat from "../../components/ui/navigation/NavChat";
import theme from "../../theme";
import TextStyled from "../../components/ui/common/TextStyled";
import Button from "../../components/ui/common/Button";

const Message = ({
  text,
  sederName,
  isCurrentUser,
  timestamp,
  style,
  ...rest
}) => {
  const messageStyle = [
    styles.containerMessage,
    isCurrentUser ? styles.currentUser : styles.otherUser,
    style,
  ];
  return (
    <View style={messageStyle}>
      <TextStyled color={"black"} fontWeight={"bold"}>
        {isCurrentUser ? "Me" : sederName}
      </TextStyled>
      <TextStyled color={"black"}>{text && text}</TextStyled>
    </View>
  );
};

const allMessages = [
  {
    id: 1,
    text: "Hola este es un mensaje de prueba",
    sederName: "Lucas",
    isCurrentUser: true,
  },
  {
    id: 2,
    text: "Hola este es un mensaje de prueba",
    sederName: "Lucas",
    isCurrentUser: false,
  },
  {
    id: 3,
    text: "Hola este es un mensaje de bienvenida asdkfljsfadkldjfasdkfljasdfklajsfkljfsa fasdjkfl  asdfkja sksljdf fadskl",
    sederName: "Lucas",
    isCurrentUser: true,
  },
];

export default function Chat() {
  const route = useRoute();
  const { params } = route;

  const handleSubmit = () => {};

  console.log(params.mentor);
  return (
    <>
      <ScreenBase complete>
        <NavChat />
        <ScrollView style={styles.containerChat}>
          {allMessages.map((message, index) => {
            return (
              <View styles={{ width: "100%" }} key={index}>
                <Message
                  isCurrentUser={message.isCurrentUser}
                  text={message.text}
                  sederName={message.sederName}
                />
              </View>
            );
          })}
        </ScrollView>
      </ScreenBase>
      <View style={styles.bottomContainer}>
        <TextInput style={styles.textInput}></TextInput>
        <Button title={"Enviar"} secondary onPresse={handleSubmit} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerChat: {},
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
    flex: 1,
  },

  containerMessage: {
    maxWidth: "80%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderColor: theme.colors.black,
    borderWidth: 1,
    gap: 4,
    marginVertical: 4,
  },
  currentUser: {
    backgroundColor: theme.colors.primary,
    borderBottomRightRadius: 0,
    alignSelf: "flex-end",
  },
  otherUser: {
    backgroundColor: theme.colors.white,
    borderBottomLeftRadius: 0,
    alignSelf: "flex-start",
  },
});
