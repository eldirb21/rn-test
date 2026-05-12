import { darkColors, lightColors } from "@theme";
import { useColorScheme } from "react-native";

export function useThemeMode() {
  const scheme = useColorScheme();

  const colors =
    scheme === "dark"
      ? darkColors
      : lightColors;

  return {
    isDark: scheme === "dark",
    colors,
  };
}