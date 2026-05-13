import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons'
import { useThemeMode } from '@hooks'
import React from 'react'

type AllIconProps = React.ComponentProps<typeof Ionicons> &
  React.ComponentProps<typeof AntDesign> &
  React.ComponentProps<typeof Feather> &
  React.ComponentProps<typeof Entypo> &
  React.ComponentProps<typeof FontAwesome> &
  React.ComponentProps<typeof FontAwesome5> &
  React.ComponentProps<typeof Fontisto> &
  React.ComponentProps<typeof EvilIcons> &
  React.ComponentProps<typeof Foundation> &
  React.ComponentProps<typeof Octicons> &
  React.ComponentProps<typeof MaterialCommunityIcons> &
  React.ComponentProps<typeof MaterialIcons> &
  React.ComponentProps<typeof SimpleLineIcons> &
  React.ComponentProps<typeof Zocial>

export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial'

interface IconsProps extends AllIconProps {
  type?: IconType
  size?: number
  color?: string
}

export function Icons({
  type = 'MaterialIcons',
  size = 24,
  color,
  ...res
}: IconsProps) {
  const { colors } = useThemeMode()
  const iconColor = color || colors.text

  switch (type) {
    case 'AntDesign':
      return <AntDesign {...res} color={iconColor} size={size} />

    case 'Feather':
      return <Feather {...res} color={iconColor} size={size} />

    case 'Entypo':
      return <Entypo {...res} color={iconColor} size={size} />

    case 'FontAwesome':
      return <FontAwesome {...res} color={iconColor} size={size} />

    case 'Fontisto':
      return <Fontisto {...res} color={iconColor} size={size} />

    case 'EvilIcons':
      return <EvilIcons {...res} color={iconColor} size={size} />

    case 'Foundation':
      return <Foundation {...res} color={iconColor} size={size} />

    case 'Octicons':
      return <Octicons {...res} color={iconColor} size={size} />

    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...res} color={iconColor} size={size} />

    case 'Ionicons':
      return <Ionicons {...res} color={iconColor} size={size} />

    case 'SimpleLineIcons':
      return <SimpleLineIcons {...res} color={iconColor} size={size} />

    case 'Zocial':
      return <Zocial {...res} color={iconColor} size={size} />
  }
  return <MaterialIcons {...res} color={iconColor} size={size} />
}
