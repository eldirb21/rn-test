import React from "react";
import {
    Text,
    View,
} from "react-native";

export default function EmptyState() {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Text>No Data</Text>
    </View>
  );
}