import { useThemeMode } from "@hooks";
import React from "react";
import {
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ScreenContainer({
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