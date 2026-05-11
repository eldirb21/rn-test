import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack =
  createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}