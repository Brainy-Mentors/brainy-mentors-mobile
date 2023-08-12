import React from "react";
import ScreenBase from "../ScreenBase";
import Button from "../../components/ui/common/Button";
import TextStyled from "../../components/ui/common/TextStyled";

export default function Home({ navigation }) {
  return (
    <ScreenBase>
      <TextStyled fontSize={'big'}>Home</TextStyled>

      <Button
        primary
        title={"Ir a perfil"}
        onPress={() => navigation.navigate("profile")}
      ></Button>
    </ScreenBase>
  );
}
