import { EmptyState, ScreenContainer, Texts } from '@atoms'
import { sizes } from '@constants'
import { Header, ProductCard } from '@molecules'
import React from 'react'
import { Image, ImageStyle, ScrollView, View, ViewStyle } from 'react-native'

export default function DetailScreen({ navigation, route }: any) {
  const { product } = route.params

  return (
    <ScreenContainer>
      <Header backcable navigation={navigation} title={product.title} />
      {!product ? (
        <EmptyState message={'Data kosong'} />
      ) : (
        <ScrollView
          contentContainerStyle={scrolled}
          showsVerticalScrollIndicator={false}
        >
          <ProductCard item={product} />
          <View style={{ paddingHorizontal: 12 }}>
            <Image source={{ uri: product.thumbnail }} style={imageDesc} />
            <Texts weight="semiBold" size={sizes.font14} color="#686767">
              {'Description'}
            </Texts>
            <Texts weight="bold" size={sizes.font20}>
              {product.title}
            </Texts>

            <Texts size={sizes.font14}>{product.description}</Texts>

            <Texts size={sizes.font16} weight="bold">
              ${product.price}
            </Texts>
          </View>
        </ScrollView>
      )}
    </ScreenContainer>
  )
}

const scrolled: ViewStyle = {
  flexGrow: 1,
  paddingBottom: 50,
}

const imageDesc: ImageStyle = {
  width: '100%',
  height: 250,
  borderRadius: 20,
  marginVertical: 20,
  resizeMode: 'contain',
}
