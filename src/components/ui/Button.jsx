import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextStyled from "./TextStyled";
import theme from "./theme";

export default function Button({
  title,
  children,
  styled,
  onPress,
  primary,
  secondary,
  ...restOfProps
}) {
  const buttonStyles = [
    styles.baseBtn,
    primary && styles.primary,
    secondary && styles.secondary,
    styled,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} {...restOfProps}>
      <TextStyled fontWeight={"bold"} fontSize={primary ? "big" : "title"} style={{ color: "black" }}>
        {title}
      </TextStyled>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    borderColor: theme.colors.black,
    borderRadius: 8,
    borderWidth: 2,
    elevation: 3,
  },
  primary: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
});
