import { z } from 'zod'

const isRequiredText = 'Campo obrigatório'
const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/

export const productSchema = z
  .object({
    model: z
      .string({ required_error: isRequiredText })
      .min(2, isRequiredText)
      .max(255, 'Modelo inválido'),
    brand: z
      .string({ required_error: isRequiredText })
      .min(2, isRequiredText)
      .max(255, 'Marca inválida'),
    price: z
      .number({ required_error: isRequiredText })
      .positive('O preço deve ser um número positivo'),
    date: z
      .string({ required_error: isRequiredText })
      .min(1, isRequiredText)
      .regex(dateRegex, 'Data inválida. O formato esperado é dd/mm/aaaa'),
    endDate: z
      .string({ required_error: isRequiredText })
      .min(1, isRequiredText)
      .regex(dateRegex, 'Data inválida. O formato esperado é dd/mm/aaaa'),
    color: z.enum(['BLACK', 'WHITE', 'GOLD', 'PINK'], {
      message: 'Cor inválida',
    }),
  })
  .refine(
    (data) => {
      const [day, month, year] = data.date.split('/').map(Number)
      const currentDate = new Date()
      const date = new Date(`${year}/${month}/${day}`)

      return date.getTime() > currentDate.getTime()
    },
    {
      message: 'Data inválida',
      path: ['date'],
    },
  )
  .refine(
    (data) => {
      const [day, month, year] = data.date.split('/').map(Number)
      const [endDay, endMonth, endYear] = data.endDate.split('/').map(Number)

      const date = new Date(`${year}/${month}/${day}`)
      const endDate = new Date(`${endYear}/${endMonth}/${endDay}`)

      return endDate.getTime() > date.getTime()
    },
    {
      message: 'Data inválida',
      path: ['endDate'],
    },
  )

export type ProductSchemaProps = z.infer<typeof productSchema>
