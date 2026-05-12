import React from "react";
import {
  View,
} from "react-native";
import { Texts } from "./Texts";

export function EmptyState() {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Texts>No Data</Texts>
    </View>
  );
}