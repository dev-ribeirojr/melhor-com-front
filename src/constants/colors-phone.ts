export enum ColorProps {
  BLACK,
  PINK,
  GOLD,
  WHITE
}
interface ColorsProps {
  id: number
  title: string
  color: 'BLACK' | 'WHITE' | 'GOLD' | 'PINK'
}

export const colorsPhone: ColorsProps[] = [
  {
    id: 1,
    color: 'BLACK',
    title: 'Preto',
  },
  {
    id: 2,
    color: 'WHITE',
    title: 'Branco',
  },
  {
    id: 3,
    color: 'PINK',
    title: 'Rosa',
  },
  {
    id: 4,
    color: 'GOLD',
    title: 'Dourado',
  },
]
