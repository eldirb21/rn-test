import { moderateScale } from './metrics'

const sizes = {
  font6: moderateScale(6),
  font8: moderateScale(8),
  font10: moderateScale(10),
  font12: moderateScale(12),
  font14: moderateScale(14),
  font16: moderateScale(16),
  font18: moderateScale(18),
  font20: moderateScale(20),
  font22: moderateScale(22),
  font24: moderateScale(24),
  font26: moderateScale(26),
  font28: moderateScale(28),
  font30: moderateScale(30),
}
const weight = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
}

type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold'

const fonts = {
  regular: 'PoppinsRegular',
  medium: 'PoppinsMedium',
  bold: 'PoppinsBold',
  semiBold: 'PoppinsSemiBold',
} as const

export { sizes, fonts, weight, FontWeight }
