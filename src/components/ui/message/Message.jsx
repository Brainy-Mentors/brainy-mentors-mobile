import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../../theme";
import TextStyled from "../common/TextStyled";
import { useTranslation } from "react-i18next";

export default function Message({
  text,
  sederName,
  isCurrentUser,
  timestamp,
  style,
  ...rest
}) {
  const messageStyle = [
    styles.containerMessage,
    isCurrentUser ? styles.currentUser : styles.otherUser,
    style,
  ];

  const { t } = useTranslation("global");

  return (
    <View style={messageStyle}>
      <TextStyled color={"black"} fontSize={"heading"} fontWeight={"bold"}>
        {isCurrentUser ? t("chat.you") : sederName}
      </TextStyled>
      <TextStyled color={"black"} style={{ fontSize: 14 }}>
        {text && text}
      </TextStyled>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMessage: {
    maxWidth: "90%",
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
