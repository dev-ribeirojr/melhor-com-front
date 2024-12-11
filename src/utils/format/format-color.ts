import { colorsPhone } from '@/constants/colors-phone'
import { ColorProps } from '../../types'

export function formatColors(color: ColorProps): string {
  const isValidColor = colorsPhone.find((item) => item.color === color)

  if (isValidColor) {
    return isValidColor.title
  }

  return '-'
}
