import { EmptyState, ScreenContainer } from '@atoms'
import { Header, ProductCard } from '@molecules'
import React from 'react'

import { Image, ScrollView, Text, ViewStyle } from 'react-native'

export default function DetailScreen({ navigation, route }: any) {
  const { product } = route.params

  return (
    <ScreenContainer>
      <Header backcable navigation={navigation} title={product.title} />
      {!product ? (
        <EmptyState message={'Data kosong'} />
      ) : (
        <ScrollView style={scrolled}>
          <ProductCard item={product} />

          <Image
            source={{
              uri: product.thumbnail,
            }}
            style={{
              width: '100%',
              height: 250,
              borderRadius: 20,
              marginTop: 20,
            }}
          />

          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              marginTop: 20,
            }}
          >
            {product.title}
          </Text>

          <Text
            style={{
              marginTop: 16,
              lineHeight: 24,
            }}
          >
            {product.description}
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            ${product.price}
          </Text>
        </ScrollView>
      )}
    </ScreenContainer>
  )
}

const scrolled: ViewStyle = {
  flex: 1,
  // padding: 16,
}
