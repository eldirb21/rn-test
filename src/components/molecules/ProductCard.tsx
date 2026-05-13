import { Texts } from '@atoms'
import React from 'react'
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native'

export function ProductCard({ item, onPress }: any) {
  return (
    <View style={item}>
      <Image
        source={{
          uri: item.thumbnail,
        }}
        resizeMode="contain"
        style={{
          width: '100%',
          height: 200,
        }}
      />

      <View
        style={{
          padding: 16,
        }}
      >
        <Texts
          style={{
            fontWeight: '700',
            fontSize: 18,
          }}
        >
          {item.title}
        </Texts>

        <Texts numberOfLines={2}>{item.description}</Texts>

        <Texts
          style={{
            marginTop: 8,
            fontWeight: 'bold',
          }}
        >
          ${item.price}
        </Texts>
      </View>
    </View>
  )
}

const item: ViewStyle = {
  backgroundColor: '#fff',
  marginBottom: 16,
  overflow: 'hidden',
}
