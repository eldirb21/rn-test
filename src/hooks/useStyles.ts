import { useMemo } from "react";

import {
    StyleSheet,
} from "react-native";
import { useThemeMode } from "./useThemeMode";


type ColorsType = {
    background: string;
    card: string;
    text: string;
    secondary: string;
    primary: string;
    danger: string;
    border: string;
};

type StyleCreator<T> = (
    colors: ColorsType
) => T;

export function useStyles<
    T extends StyleSheet.NamedStyles<T>
>(
    styleCreator: StyleCreator<T>
): T {
    const { colors } =
        useThemeMode();

    const themedStyles =
        useMemo(() => {
            return StyleSheet.create(
                styleCreator(colors)
            );
        }, [colors]);

    return themedStyles;
}