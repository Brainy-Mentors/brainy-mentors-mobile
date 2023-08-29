import React, { useContext, useState } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import { useTranslation } from "react-i18next";
import TextStyled from "../common/TextStyled";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import esImage from "../../../assets/images/flag-languages/es.png";
import euImage from "../../../assets/images/flag-languages/eu.png";
import theme from "../../../theme";
import AppContext from "../../../context/AppContext";

export default function ChangeLenguage() {
  const { i18n } = useTranslation();

  const { lang, setLang } = useContext(AppContext);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleLanguage}>
      <Feather name="refresh-ccw" style={styles.icon} />
      <Image
        source={lang == "en" ? euImage : esImage}
        style={styles.image}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  button: {
    flexDirection: "row",
    backgroundColor: theme.colors.backgrounBaseLight,
    padding: 8,
    borderRadius: 8,
  },
  image: {
    width: 30,
    height: 20,
    // aspectRatio: 16 / 9,
  },
  icon: {
    color: theme.colors.white,
  },
});
