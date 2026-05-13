import {
  fonts,
  FontWeight,
  sizes,
} from "@constants";

import {
  useStyles,
  useThemeMode,
} from "@hooks";

import React from "react";

import {
  Text,
  TextProps,
  TextStyle,
} from "react-native";

interface Props
  extends TextProps {
  size?: number;
  color?: string;
  weight?: FontWeight;
  center?: boolean;
  uppercase?: boolean;
  style?: TextStyle | TextStyle[];
  type?:
  | "default"
  | "title"
  | "subtitle";
}

export const Texts: React.FC<
  Props
> = ({
  size,
  color,
  weight,
  center = false,
  uppercase = false,
  style,
  children,
  type = "default",
  ...rest
}) => {
    const { colors } =
      useThemeMode();

    const styles = useStyles(
      (): Record<
        NonNullable<Props["type"]>,
        TextStyle
      > => ({
        default: {
          fontSize: sizes.font12,
          fontFamily:
            fonts.regular,
        },

        title: {
          fontSize:  sizes.font20,
          fontFamily:
            fonts.bold,
        },

        subtitle: {
          fontSize:  sizes.font16,
          fontFamily:
            fonts.semiBold,
        },
      })
    );

    const typeStyle = styles[type];

    const textStyles: TextStyle[] =
      [
        typeStyle,

        {
          color:
            color ||
            colors.text,

          fontSize:
            size ||
            typeStyle.fontSize,

          fontFamily:
            weight
              ? fonts[weight]
              : typeStyle.fontFamily,
        },

        center && {
          textAlign: "center",
        },

        uppercase && {
          textTransform:
            "uppercase",
        },

        ...(Array.isArray(style)
          ? style
          : style
            ? [style]
            : []),
      ].filter(Boolean) as TextStyle[];

    return (
      <Text
        {...rest}
        style={textStyles}
      >
        {children}
      </Text>
    );
  };