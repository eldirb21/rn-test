import React from "react";

import {
    Image,
    ScrollView,
    Text,
    View,
} from "react-native";

import ProductCard from "../components/ProductCard";
import ScreenContainer from "../components/ScreenContainer";

export default function DetailScreen({
  route,
}: any) {
  const { product } =
    route.params;

  if (!product) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent:
            "center",
          alignItems: "center",
        }}
      >
        <Text>Data kosong</Text>
      </View>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <ProductCard
          item={product}
        />

        <Image
          source={{
            uri: product.thumbnail,
          }}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 20,
            marginTop: 20,
          }}
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
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
            fontWeight: "bold",
          }}
        >
          ${product.price}
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
}