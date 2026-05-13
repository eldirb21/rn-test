import { useThemeMode } from '@hooks'
import React from 'react'
import { ActivityIndicator, View, ViewStyle } from 'react-native'

export function Loading() {
  const { colors } = useThemeMode()

  return (
    <View style={loaded(colors)}>
      <ActivityIndicator size="large" color={colors.defaultColor} />
    </View>
  )
}

const loaded = (colors: any): ViewStyle => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.overlay,
})
