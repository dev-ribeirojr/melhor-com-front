export type ColorProps = 'BLACK' | 'WHITE' | 'GOLD' | 'PINK'

export interface PhoneProps {
  model: string
  brand: string
  price: number
  date: string
  endDate: string
  color: ColorProps
  code: string
}
