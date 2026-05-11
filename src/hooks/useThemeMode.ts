import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "../theme/colors";

export default function useThemeMode() {
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