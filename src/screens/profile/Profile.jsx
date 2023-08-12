import React from "react";
import ScreenBase from "../ScreenBase";
import Button from "../../components/ui/common/Button";
import TextStyled from "../../components/ui/common/TextStyled";

export default function Profile({ navigation }) {
  return (
    <ScreenBase>
      <TextStyled fontSize={"big"}>Perfil</TextStyled>
      <Button
        primary
        title={"Ir a Home"}
        onPress={() => navigation.navigate("home")}
      ></Button>
    </ScreenBase>
  );
}
