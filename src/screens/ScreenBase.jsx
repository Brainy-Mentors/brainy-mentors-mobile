import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/ui/navigation/Navbar";
import ModalReward from "../components/modalReward/ModalReward";
import AppContext from "../context/AppContext";

export default function ScreenBase({ children, complete, style }) {
  const ScreenBaseStyle = [styles.container, style];
  const { isOpenModalReward, setIsOpenModalReward } = useContext(AppContext);
  return (
    <View style={ScreenBaseStyle}>
      <ModalReward
        isOpenModal={isOpenModalReward}
        setIsOpenModal={setIsOpenModalReward}
      />
      <StatusBar style="light" />
      <View
        style={{
          paddingTop: Platform.OS === "android" && 40,
          marginBottom: complete ? 0 : 60,
          paddingHorizontal: 24,
        }}
      >
        {complete ? null : <Navbar />}
        {children}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundBase,
  },
});
