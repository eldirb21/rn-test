import React from "react";
import {
  TouchableOpacity,
} from "react-native";
import { Texts } from "./Texts";

export function CustomButton({
  title,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#72e625",
        padding: 16,
        borderRadius: 10,
      }}
    >
      <Texts type="subtitle" weight="semiBold" center>{title}</Texts>
    </TouchableOpacity>
  );
}