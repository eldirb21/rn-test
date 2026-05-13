import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { useFonts } from 'expo-font'
import { Loading } from '@atoms'

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  })

  if (!loaded) return <Loading />

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
