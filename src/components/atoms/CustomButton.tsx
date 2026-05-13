import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { Texts } from './Texts'
import { useThemeMode } from '@hooks'
import { sizes } from '@constants'

export function CustomButton({ title, onPress }: any) {
  const { colors } = useThemeMode()

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={btn(colors)}>
      <Texts size={sizes.font12} color={colors.white} weight="semiBold" center>
        {title}
      </Texts>
    </TouchableOpacity>
  )
}

const btn = (colors: any): ViewStyle => ({
  backgroundColor: colors.baseColor,
  padding: 8,
  borderRadius: 10,
})
