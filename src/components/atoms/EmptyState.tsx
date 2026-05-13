import React from 'react'
import { View } from 'react-native'
import { Texts } from './Texts'

export function EmptyState({ message = 'No Data' }: { message?: string }) {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <Texts>{message}</Texts>
    </View>
  )
}
