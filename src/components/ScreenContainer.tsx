import React from "react";
import {
  StyleSheet,
} from "react-native";
import useThemeMode from "../hooks/useThemeMode";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenContainer({
  children,
}: any) {
  const { colors } = useThemeMode();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            colors.background,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});