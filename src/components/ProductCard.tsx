import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProductCard({
  item,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#fff",
        marginBottom: 16,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <Image
        source={{
          uri: item.thumbnail,
        }}
        style={{
          width: "100%",
          height: 200,
        }}
      />

      <View
        style={{
          padding: 16,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
          }}
        >
          {item.title}
        </Text>

        <Text numberOfLines={2}>
          {item.description}
        </Text>

        <Text
          style={{
            marginTop: 8,
            fontWeight: "bold",
          }}
        >
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}