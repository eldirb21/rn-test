import {
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StatusBar,
} from 'react-native'

import React, { ReactNode } from 'react'

import { Icons, Texts } from '@atoms'
import { useThemeMode } from '@hooks'

type Props = {
  navigation?: any

  title?: string

  right?: ReactNode

  backcable?: boolean
}

export const Header = ({ navigation, title, right, backcable }: Props) => {
  const { colors, isDark } = useThemeMode()

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.baseColor}
      />
      <View style={header(colors)}>
        {backcable && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Icons name="chevron-back" type="Ionicons" color={colors.white} />
          </TouchableOpacity>
        )}

        <Texts
          weight="semiBold"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={titles}
          color={colors.white}
        >
          {title}
        </Texts>

        {right ? (
          <View style={rightContent}>{right}</View>
        ) : (
          <View style={{ width: 24 }} />
        )}
      </View>
    </>
  )
}

const header = (colors: any): ViewStyle => ({
  height: 56,
  backgroundColor: colors.baseColor,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
})

const rightContent: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
}
const titles: TextStyle = {
  flex: 1,
  marginLeft: 8,
}
