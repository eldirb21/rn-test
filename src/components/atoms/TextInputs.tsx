import React, { useState } from 'react'
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { Icons } from './Icons'
import { Texts } from './Texts'
import { sizes } from '@constants'

type Props = {
  title?: string
  error?: string
  secureEntry?: boolean
  leftIcon?: string
  rightIcon?: string
} & TextInputProps

export const TextInputs = (props: Props) => {
  const hasError = !!props.error

  const [secureText, setSecureText] = useState(true)

  const handlerShowHiddenValue = () => {
    if (!props?.secureEntry) return null
    setSecureText(!secureText)
  }
  return (
    <View style={{ gap: 1 }}>
      {props.title && (
        <Texts color="#1A1A1A" size={sizes.font12} weight="medium">
          {props.title}
        </Texts>
      )}
      <View
        style={{
          borderColor: hasError ? '#EF4444' : '#E5E7EB',
          ...inputContainer,
        }}
      >
        {props.leftIcon && (
          <Icons
            type="Ionicons"
            name={props.leftIcon}
            size={20}
            color={hasError ? '#EF4444' : '#6B7280'}
            style={margin}
          />
        )}

        <TextInput
          style={input}
          secureTextEntry={props.secureEntry ? secureText : false}
          {...props}
        />
        {props.rightIcon && (
          <Icons
            type="Ionicons"
            name={secureText ? props.rightIcon : 'eye-show'}
            size={sizes.font20}
            color="#000"
            onPress={handlerShowHiddenValue}
            style={margin}
          />
        )}
      </View>
      {props.error && (
        <Texts color="#EF4444" size={sizes.font12} weight="medium">
          {props.error}
        </Texts>
      )}
    </View>
  )
}

const margin: ViewStyle = { marginHorizontal: 6 }
const inputContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  backgroundColor: '#e3e3e32d',
  borderRadius: 16,
}
const input: TextStyle = {
  flex: 1,
  borderRadius: 8,
  color: '#000',
  backgroundColor: 'transparent',
}
