import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../../theme";
import Icon from "react-native-vector-icons/Feather";
import TextStyled from "../common/TextStyled";
import AppContext from "../../../context/AppContext";

export default function TokensButton() {
  const { tokensCount, setIsOpenModalReward } = useContext(AppContext);

  const handlePress = () => {
    console.log("active");
    setIsOpenModalReward(true);
  };
  return (
    <TouchableOpacity style={styles.container}  onPressIn={handlePress}>
      <TextStyled color={"white"} style={{ paddingHorizontal: 8 }}>
        {tokensCount && tokensCount}
      </TextStyled>
      <View style={styles.containerIcon}>
        <Icon name="plus" size={15} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingLeft: 1,
    borderColor: theme.colors.primary,
    borderRadius: 99,
    overflow: "hidden",
  },
  containerIcon: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 2,
    borderRadius: 99,
  },
});
