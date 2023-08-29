import React from "react";
import ScreenBase from "../ScreenBase";
import { View } from "react-native";
import ChangeMentor from "../../components/changeMentor/ChangeMentor";

export default function Home() {
  return (
    <ScreenBase>
      <View style={{ gap: 32 }}>
        <ChangeMentor />
      </View>
    </ScreenBase>
  );
}
