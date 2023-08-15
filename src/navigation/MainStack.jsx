import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import SelectMentor from "../screens/selectMentor/SelectMentor";
import theme from "../theme";

const Stack = createStackNavigator();

const customScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  gestureDirection: "horizontal", // Dirección de deslizamiento
};

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: theme.colors.backgroundBase },
          ...customScreenOptions,
        }}
      >
        <Stack.Screen name="select-mentor" component={SelectMentor} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
