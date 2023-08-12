import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../../theme";

export default function IconButton({
  title,
  children,
  styled,
  onPress,
  filled,
  unfilled,
  ...restOfProps
}) {
  const buttonStyles = [
    styles.baseBtn,
    filled && styles.filled,
    unfilled && styles.unfilled,
    styled,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} {...restOfProps}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseBtn: {
    width: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
  },
  filled: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    color: theme.colors.black,
  },
  unfilled: {
    borderColor: theme.colors.white,
    borderWidth: 2,
    color: theme.colors.white,
  },
});
