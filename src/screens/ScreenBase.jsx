import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/ui/navigation/Navbar";

export default function ScreenBase({ children, complete, style }) {
  const ScreenBaseStyle = [styles.container, style];
  return (
    <View style={ScreenBaseStyle}>
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
