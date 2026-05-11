import React from "react";
import {
    Text,
    TouchableOpacity,
} from "react-native";

export default function CustomButton({
  title,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#2563EB",
        padding: 16,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}