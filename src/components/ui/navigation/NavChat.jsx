import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextStyled from "../common/TextStyled";
import Feather from "react-native-vector-icons/Feather";
import theme from "../../../theme";
import AppContext from "../../../context/AppContext";

export default function NavChat() {
  const { selectedMentor } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flexDirection: "row", gap: 8, alignItems: "flex-end" }}
      >
        <TextStyled fontWeight={"bold"} color={"white"} fontSize={"big"}>
          {selectedMentor?.name}
        </TextStyled>
        <TextStyled color={"primary"} fontSize={"title"}>
          - Online
        </TextStyled>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="menu" style={styles.icon} />
      </TouchableOpacity>
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
