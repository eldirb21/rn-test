import { useThemeMode } from '@hooks'
import React from 'react'
import { ActivityIndicator, View, ViewStyle } from 'react-native'

export function Spinner({ visible }: { visible: boolean }) {
  const { colors } = useThemeMode()

  if (!visible) return null
  return (
    <View style={spinners(colors)}>
      <ActivityIndicator size="large" color={colors.defaultColor} />
    </View>
  )
}

const spinners = (colors: any): ViewStyle => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: colors.overlay,
})
