import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from 'src/screens/LoginScreen'
import HomeScreen from 'src/screens/HomeScreen'
import DetailScreen from 'src/screens/DetailScreen'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}
