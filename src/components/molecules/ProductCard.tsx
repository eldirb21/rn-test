import { Texts } from '@atoms'
import { sizes } from '@constants'
import { useThemeMode } from '@hooks'
import React from 'react'
import {
  Image,
  ImageStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

export function ProductCard({ item, onPress }: any) {
  const { colors } = useThemeMode()

  return (
    <TouchableOpacity
      style={items(colors)}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Image
        source={{ uri: item.thumbnail }}
        resizeMode="contain"
        style={imageBanner}
      />

      <View style={contentFooter}>
        <Texts weight="bold" size={sizes.font16} color={colors.black}>
          {item.title}
        </Texts>

        <Texts numberOfLines={2} color={colors.black}>
          {item.description}
        </Texts>

        <Texts weight="bold" style={{ marginTop: 8 }} color={colors.black}>
          ${item.price}
        </Texts>
      </View>
    </TouchableOpacity>
  )
}

const items = (colors: any): ViewStyle => ({
  backgroundColor: colors.white,
  overflow: 'hidden',
})
const imageBanner: ImageStyle = {
  width: '100%',
  height: 200,
}

const contentFooter: ViewStyle = {
  padding: 16,
}
