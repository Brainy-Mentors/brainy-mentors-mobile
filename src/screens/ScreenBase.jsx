import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import { StatusBar } from 'expo-status-bar';
import Navbar from '../components/ui/navigation/Navbar';

export default function ScreenBase({children}) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          paddingTop: Platform.OS === "android" && 40,
          marginBottom: 60,
          paddingHorizontal: 24,
        }}
      >
        <Navbar />
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