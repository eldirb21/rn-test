import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { Texts } from './Texts'

export function CustomButton({ title, onPress }: any) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={btn}>
      <Texts size={14} weight="semiBold" center>
        {title}
      </Texts>
    </TouchableOpacity>
  )
}

const btn: ViewStyle = {
  backgroundColor: '#72e625',
  padding: 8,
  borderRadius: 10,
}
