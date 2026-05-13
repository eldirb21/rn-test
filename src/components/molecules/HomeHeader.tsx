import { View, StatusBar, TouchableOpacity, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Texts } from '@atoms'
import { removeToken } from '@storage'
import { Header } from './Header'

type Props = {
  navigation: any
  email: string
}

export const HomeHeader = ({ navigation, email }: Props) => {
  const [showItem, setShowItem] = useState(false)
  const logout = async () => {
    setShowItem(false)
    await removeToken()
    navigation.replace('Login')
  }

  return (
    <View>
      <StatusBar barStyle={'default'} backgroundColor="#72e625" />
      <Header
        title="Welcome"
        right={
          <TouchableOpacity
            activeOpacity={0.8}
            style={avatar}
            onPress={() => setShowItem(!showItem)}
          >
            <Texts
              color="#449d08"
              weight="semiBold"
              style={{ fontStyle: 'italic', textTransform: 'uppercase' }}
            >
              {email.slice(0, 2)}
            </Texts>
          </TouchableOpacity>
        }
      />

      {showItem && (
        <View style={itemContainer}>
          <Texts>{email}</Texts>
          <TouchableOpacity activeOpacity={0.8} onPress={logout}>
            <Texts color="#ea0a0a">Logout</Texts>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const header: ViewStyle = {
  height: 45,
  backgroundColor: '#72e625',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 8,
}

const avatar: ViewStyle = {
  backgroundColor: '#FFF',
  height: 40,
  width: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
}

const itemContainer: ViewStyle = {
  padding: 12,
  backgroundColor: '#FFF',
  position: 'absolute',
  top: 20,
  right: 50,
  borderRadius: 20,
  borderTopEndRadius: 0,

  zIndex: 999,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
  gap: 4,
}
