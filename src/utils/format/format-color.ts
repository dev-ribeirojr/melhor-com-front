import { ColorProps } from '../../types'

export function formatColors(color: ColorProps): string {
  let textColor = ''

  switch (color) {
    case 'BLACK':
      textColor = 'Preto'
      break
    case 'WHITE':
      textColor = 'Branco'
      break
    case 'PINK':
      textColor = 'Rosa'
      break
    case 'GOLD':
      textColor = 'Dourado'
      break
    default:
      textColor = '-'
  }
  return textColor
}
