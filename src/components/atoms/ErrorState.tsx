import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Texts } from './Texts'

export function ErrorState({ message }: { message: string }) {
  return (
    <View style={content}>
      <Texts>{message}</Texts>
    </View>
  )
}
const content: ViewStyle = {
  position: 'absolute',
  top: 85,
  bottom: 0,
  left: 0,
  right: 0,
  flex: 1,
  padding: 20,
  alignItems: 'center',
  marginTop: 10,
  zIndex: 9,
  backgroundColor: '#FFF',
}
