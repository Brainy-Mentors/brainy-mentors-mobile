import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TextStyled from "../common/TextStyled";
import theme from "../../../theme";
import AppContext from "../../../context/AppContext";
import ChangeLenguage from "./ChangeLenguage";
import TokensButton from "./TokensButton";
import { useTranslation } from "react-i18next";

export default function NavChat() {
  const { selectedMentor } = useContext(AppContext);
  const { t } = useTranslation("global");

  const nameMentor = JSON.parse(selectedMentor).name.split(" ")[0];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flexDirection: "row", gap: 8, alignItems: "flex-end" }}
      >
        <TextStyled fontWeight={"bold"} color={"white"} fontSize={"big"}>
          {nameMentor}
        </TextStyled>
        <TextStyled color={"primary"} fontSize={"title"}>
          - {t("chat.online")}
        </TextStyled>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <TokensButton />
        <ChangeLenguage></ChangeLenguage>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
    height: 44,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: theme.colors.white,
  },
  icon: {
    fontSize: theme.fontSizes.big,
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.white,
    margin: "auto",
  },
});
