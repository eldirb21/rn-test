import { Texts } from '@atoms'
import { sizes } from '@constants'
import React from 'react'
import {
  Image,
  ImageStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

export function ProductCard({ item, onPress }: any) {
  return (
    <TouchableOpacity style={items} activeOpacity={0.9} onPress={onPress}>
      <Image
        source={{ uri: item.thumbnail }}
        resizeMode="contain"
        style={imageBanner}
      />

      <View style={contentFooter}>
        <Texts weight="bold" size={sizes.font16}>
          {item.title}
        </Texts>

        <Texts numberOfLines={2}>{item.description}</Texts>

        <Texts weight="bold" style={{ marginTop: 8 }}>
          ${item.price}
        </Texts>
      </View>
    </TouchableOpacity>
  )
}

const items: ViewStyle = {
  backgroundColor: '#fff',
  overflow: 'hidden',
}

const imageBanner: ImageStyle = {
  width: '100%',
  height: 200,
}

const contentFooter: ViewStyle = {
  padding: 16,
}
