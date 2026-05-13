import {
  CustomButton,
  ScreenContainer,
  Spinner,
  TextInputs,
  Texts,
} from '@atoms'
import { loginService } from '@services'
import { saveEmail, saveToken } from '@storage'
import { validateEmail } from '@utils'
import React, { useState } from 'react'
import { Alert, ScrollView, TextStyle, View, ViewStyle } from 'react-native'

interface InputProps {
  email: string
  password: string
}
export default function LoginScreen({ navigation }: any) {
  const [inputs, setInputs] = useState<InputProps>({
    email: 'test@gmail.com',
    password: '@135135Ts',
  })
  const [errors, setErrors] = useState<InputProps>({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const validation = () => {
    const { email, password } = inputs
    if (!email) {
      setErrors({ ...errors, email: 'Email is required' })
      return false
    } else if (!password) {
      setErrors({ ...errors, password: 'Password is required' })
      return false
    }

    if (!validateEmail(email)) {
      setErrors({ ...errors, email: 'Format email is not valid' })
      return false
    }

    return true
  }

  const handleLogin = async () => {
    try {
      const { email, password } = inputs
      const valid = validation()
      if (!valid) return

      setLoading(true)

      const response = await loginService(email, password)

      await saveToken(response.token)

      await saveEmail(email)

      navigation.replace('Home')
    } catch (error) {
      Alert.alert('Error', 'Login gagal')
    } finally {
      setLoading(false)
    }
  }

  const handlerChange = (key: string, val: string) => {
    if (key === 'Email') {
      setInputs({ ...inputs, email: val })
      setErrors({ ...errors, email: '' })
    }
    if (key === 'Password') {
      setInputs({ ...inputs, password: val })
      setErrors({ ...errors, password: '' })
    }
  }
  return (
    <ScreenContainer>
      <View style={bgTop} />
      <View style={container}>
        <View style={containerTitle}>
          <View style={contentTitle}>
            <Texts type="title">Hallo</Texts>
            <Texts type="subtitle">Welcome app test!</Texts>
          </View>
        </View>
        <ScrollView contentContainerStyle={scroller}>
          <View style={form}>
            <Texts center type="subtitle" style={title}>
              Login
            </Texts>

            <TextInputs
              title="Email Address"
              leftIcon="person-outline"
              placeholder="Email"
              autoCapitalize="none"
              value={inputs.email}
              onChangeText={(val) => handlerChange('Email', val)}
              error={errors.email}
            />

            <TextInputs
              title="Password"
              placeholder="Password"
              leftIcon="key"
              rightIcon="eye"
              secureEntry
              value={inputs.password}
              onChangeText={(val) => handlerChange('Password', val)}
              error={errors.password}
            />

            <View style={devider} />

            <CustomButton
              onPress={handleLogin}
              title={loading ? 'Loading...' : 'Login'}
            />
          </View>
        </ScrollView>
      </View>

      <Spinner visible={loading} />
    </ScreenContainer>
  )
}

const bgTop: ViewStyle = {
  backgroundColor: '#72e625',
  height: '32%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: '50%',
  borderBottomStartRadius: '50%',
  borderBottomEndRadius: '50%',
}

const containerTitle: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '10%',
  left: 0,
  right: 0,
}
const contentTitle: ViewStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.13)',
  padding: 8,
  paddingHorizontal: 40,
  borderRadius: 100,
  alignItems: 'center',
}

const scroller: ViewStyle = {
  flexGrow: 1,
  justifyContent: 'center',
}

const form: ViewStyle = {
  backgroundColor: '#FFF',
  borderRadius: 10,
  padding: 20,
  gap: 4,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}
const container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  padding: 20,
}
const title: TextStyle = {
  marginBottom: 20,
}

const devider: ViewStyle = {
  height: 10,
}
