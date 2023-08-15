import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import SelectMentor from "../screens/selectMentor/SelectMentor";
import theme from "../theme";
import Chat from "../screens/chat/Chat";

const Stack = createStackNavigator();

const customScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  gestureDirection: "horizontal",
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
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="select-mentor" component={SelectMentor} />
        <Stack.Screen name="chat" component={Chat} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
