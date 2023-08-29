import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../../theme";

export default function IconButton({
  title,
  children,
  style,
  onPress,
  filled,
  unfilled,
  ...restOfProps
}) {
  const buttonStyles = [
    styles.baseBtn,
    filled && styles.filled,
    unfilled && styles.unfilled,
    style,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} {...restOfProps}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseBtn: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
  },
  filled: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    color: theme.colors.black,
  },
  unfilled: {
    borderColor: theme.colors.white,
    borderWidth: 1,
    color: theme.colors.white,
  },
});
