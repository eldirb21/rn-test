import { View, TouchableOpacity, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Texts } from '@atoms'
import { removeToken } from '@storage'
import { Header } from './Header'
import { useThemeMode } from '@hooks'

type Props = {
  navigation: any
  email: string
}

export const HomeHeader = ({ navigation, email }: Props) => {
  const { colors } = useThemeMode()

  const [showItem, setShowItem] = useState(false)
  const logout = async () => {
    setShowItem(false)
    await removeToken()
    navigation.replace('Login')
  }

  return (
    <View>
      <Header
        title="Welcome"
        right={
          <TouchableOpacity
            activeOpacity={0.8}
            style={avatar(colors)}
            onPress={() => setShowItem(!showItem)}
          >
            <Texts
              color={colors.defaultColor}
              weight="semiBold"
              style={{ fontStyle: 'italic', textTransform: 'uppercase' }}
            >
              {email?.slice(0, 2)}
            </Texts>
          </TouchableOpacity>
        }
      />

      {showItem && (
        <View style={itemContainer(colors)}>
          <Texts color={colors.black}>{email}</Texts>
          <TouchableOpacity activeOpacity={0.8} onPress={logout}>
            <Texts color={colors.danger}>Logout</Texts>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const avatar = (colors: any): ViewStyle => ({
  backgroundColor: colors.white,
  height: 40,
  width: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
})

const itemContainer = (colors: any): ViewStyle => ({
  padding: 12,
  backgroundColor: colors.white,
  position: 'absolute',
  top: 20,
  right: '15%',
  borderRadius: 20,
  borderTopEndRadius: 0,

  zIndex: 999,
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  gap: 4,
})
