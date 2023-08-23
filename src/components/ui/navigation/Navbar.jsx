import React from "react";
import { StyleSheet,TouchableOpacity, View } from "react-native";
import TextStyled from "../common/TextStyled";
import theme from "../../../theme";
import ChangeLenguage from "./ChangeLenguage";
import TokensButton from "./TokensButton";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <TextStyled fontWeight={"bold"} color={"white"} fontSize={"big"}>
          BrainyMentors
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
