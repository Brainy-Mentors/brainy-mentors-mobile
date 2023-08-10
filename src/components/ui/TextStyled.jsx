import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  bigFont: {
    fontSize: theme.fontSizes.big,
  },
  extraBigFont: {
    fontSize: theme.fontSizes.extraBig,
  },
  titleFont: {
    fontSize: theme.fontSizes.title,
  },
});

export default function TextStyled({
  align,
  children,
  color,
  fontSize,
  fontWeight,
  style,
  big,
  extraBig,
  ...restOfProps
}) {
  let textFontSizeStyle;

  if (fontSize === "subheading") {
    textFontSizeStyle = styles.subheading;
  } else if (fontSize === "big") {
    textFontSizeStyle = styles.bigFont;
  } else if (fontSize === "title") {
    textFontSizeStyle = styles.titleFont;
  } else if (fontSize === "extrabig") {
    textFontSizeStyle = styles.extraBigFont;
  }
  const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontWeight === "bold" && styles.bold,
    textFontSizeStyle,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
