import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Texts } from './Texts'

export function EmptyState({ message = 'No Data' }: { message?: string }) {
  return (
    <View style={container}>
      <Texts>{message}</Texts>
    </View>
  )
}

const container: ViewStyle = {
  alignItems: 'center',
  marginTop: 20,
}
