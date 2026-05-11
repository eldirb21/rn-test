import React from "react";
import {
    Text,
    View,
} from "react-native";

export default function ErrorState({
  message,
}: {
  message: string;
}) {
  return (
    <View
      style={{
        padding: 20,
        alignItems: "center",
      }}
    >
      <Text>{message}</Text>
    </View>
  );
}