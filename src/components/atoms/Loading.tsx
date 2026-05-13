import React from 'react'
import { ActivityIndicator, View, ViewStyle } from 'react-native'

export function Loading() {
  return (
    <View style={loaded}>
      <ActivityIndicator size="large" color={'#72e625'} />
    </View>
  )
}

const loaded: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#72e62542',
}
