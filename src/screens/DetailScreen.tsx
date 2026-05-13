import { EmptyState, ScreenContainer, Texts } from '@atoms'
import { sizes } from '@constants'
import { useThemeMode } from '@hooks'
import { Header, ProductCard } from '@molecules'
import React from 'react'
import { Image, ImageStyle, ScrollView, View, ViewStyle } from 'react-native'

export default function DetailScreen({ navigation, route }: any) {
  const { colors } = useThemeMode()

  const { product } = route.params

  return (
    <ScreenContainer>
      <Header backcable navigation={navigation} title={product.title} />
      {!product ? (
        <EmptyState message={'Data kosong'} />
      ) : (
        <ScrollView
          contentContainerStyle={scrolled(colors)}
          showsVerticalScrollIndicator={false}
        >
          <ProductCard item={product} />
          <View style={{ paddingHorizontal: 12 }}>
            <Image source={{ uri: product.thumbnail }} style={imageDesc} />
            <Texts
              weight="semiBold"
              size={sizes.font14}
              color={colors.placeholder}
            >
              {'Description'}
            </Texts>
            <Texts weight="bold" size={sizes.font20} color={colors.black}>
              {product.title}
            </Texts>

            <Texts size={sizes.font14} color={colors.black}>
              {product.description}
            </Texts>

            <Texts size={sizes.font16} weight="bold" color={colors.black}>
              ${product.price}
            </Texts>
          </View>
        </ScrollView>
      )}
    </ScreenContainer>
  )
}

const scrolled = (colors: any): ViewStyle => ({
  flexGrow: 1,
  paddingBottom: 50,
  backgroundColor: colors.background2,
})

const imageDesc: ImageStyle = {
  width: '100%',
  height: 250,
  borderRadius: 20,
  marginVertical: 20,
  resizeMode: 'contain',
}
