import React, { useState, useEffect, useContext } from "react";
import ScreenBase from "../ScreenBase";
import { View } from "react-native";
import ChangeMentor from "../../components/changeMentor/ChangeMentor";
import AdContext from "../../context/AdContext";

export default function Home({ navigation }) {

  return (
    <>
      <ScreenBase>
        <View style={{ gap: 32 }}>
          <ChangeMentor />
        </View>
      </ScreenBase>
    </>
  );
}
