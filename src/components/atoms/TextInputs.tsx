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
import { useThemeMode } from '@hooks'

type Props = {
  title?: string
  error?: string
  secureEntry?: boolean
  leftIcon?: string
  rightIcon?: string
} & TextInputProps

export const TextInputs = (props: Props) => {
  const hasError = !!props.error
  const { colors } = useThemeMode()

  const [secureText, setSecureText] = useState(true)

  const handlerShowHiddenValue = () => {
    if (!props?.secureEntry) return null
    setSecureText(!secureText)
  }
  return (
    <View style={{ gap: 1 }}>
      {props.title && (
        <Texts color={colors.black} size={sizes.font12} weight="medium">
          {props.title}
        </Texts>
      )}
      <View
        style={{
          borderColor: hasError ? colors.danger : colors.border,
          ...inputContainer(colors),
        }}
      >
        {props.leftIcon && (
          <Icons
            type="Ionicons"
            name={props.leftIcon}
            size={20}
            color={hasError ? colors.danger : colors.grey}
            style={margin}
          />
        )}

        <TextInput
          style={input(colors)}
          secureTextEntry={props.secureEntry ? secureText : false}
          placeholderTextColor={colors.placeholder}
          {...props}
        />
        {props.rightIcon && (
          <Icons
            type="Ionicons"
            name={secureText ? props.rightIcon : 'eye-outline'}
            size={sizes.font20}
            color={colors.grey}
            onPress={handlerShowHiddenValue}
            style={margin}
          />
        )}
      </View>
      {props.error && (
        <Texts color={colors.danger} size={sizes.font12} weight="medium">
          {props.error}
        </Texts>
      )}
    </View>
  )
}

const margin: ViewStyle = { marginHorizontal: 6 }
const inputContainer = (colors: any): ViewStyle => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  backgroundColor: colors.grey1,
  borderRadius: 16,
})
const input = (colors: any): TextStyle => ({
  flex: 1,
  borderRadius: 8,
  color: colors.black,
  backgroundColor: colors.trasnparent,
})
