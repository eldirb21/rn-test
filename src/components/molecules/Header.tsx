import { View, TouchableOpacity, ViewStyle } from 'react-native'

import React, { ReactNode } from 'react'

import { Icons, Texts } from '@atoms'

type Props = {
  navigation?: any

  title?: string

  right?: ReactNode

  backcable?: boolean
}

export const Header = ({ navigation, title, right, backcable }: Props) => {
  return (
    <View style={header}>
      {backcable && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Icons name="chevron-back" type="Ionicons" />
        </TouchableOpacity>
      )}

      <Texts
        weight="semiBold"
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          flex: 1,
          marginLeft: 8,
        }}
      >
        {title}
      </Texts>

      {right ? (
        <View style={rightContent}>{right}</View>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </View>
  )
}

const header: ViewStyle = {
  height: 56,

  backgroundColor: '#72e625',

  flexDirection: 'row',

  alignItems: 'center',

  paddingHorizontal: 16,
}

const rightContent: ViewStyle = {
  justifyContent: 'center',

  alignItems: 'center',
}
