import { fonts, FontWeight, sizes } from "@constants";
import { useStyles, useThemeMode } from "@hooks";
import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
 

interface Props extends TextProps {
  size?: number;
  color?: string;
  weight?: FontWeight;
  center?: boolean;
  uppercase?: boolean;
  style?: TextStyle | TextStyle[];
  type?: "default" | "title" | "subtitle"
}



export const Texts: React.FC<Props> = ({
  size = sizes.font12,
  color,
  weight = "regular",
  center = false,
  uppercase = false,
  style,
  children,
  type = "default",
  ...rest
}) => {
  const { colors } = useThemeMode();

  const textColor = color || colors.text;
  console.log(type);

  const styles = useStyles(
    (colors): Record<NonNullable<Props["type"]>, TextStyle> => ({
      default: {
        fontSize: 14,
        fontFamily: fonts['regular'],
        color: textColor
      },
      title: {
        fontSize: 22,
        fontFamily: fonts['bold'],
        color: textColor
      },
      subtitle: {
        fontSize: 18,
        fontFamily: fonts['semiBold'],
        color: textColor
      },

    })
  );

  const textStyles: TextStyle[] = [
    styles[type],
    center && { textAlign: "center" },
    uppercase && { textTransform: "uppercase" },
    ...(Array.isArray(style) ? style : style ? [style] : []),
  ].filter(Boolean) as TextStyle[];

  return (
    <Text {...rest} style={textStyles}>
      {children}
    </Text>
  );
};