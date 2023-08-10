import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextStyled from "../common/TextStyled";
import Feather from "react-native-vector-icons/Feather";
import theme from "../../../theme";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <TextStyled fontWeight={"bold"} color={"white"} fontSize={"big"}>
          BrainyMentors
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
