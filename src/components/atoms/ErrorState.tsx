import React from "react";
import {
  View,
} from "react-native";
import { Texts } from "./Texts";

export function ErrorState({
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
      <Texts>{message}</Texts>
    </View>
  );
}