import React from "react";
import {
  ActivityIndicator,
  View,
  ViewStyle,
} from "react-native";

export function Spinner({ visible }: { visible: boolean }) {
  if (!visible) return null
  return (
    <View style={spinners}>
      <ActivityIndicator size="large" color={"#72e625"} />
    </View>
  );
}

const spinners: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#72e62542'
}