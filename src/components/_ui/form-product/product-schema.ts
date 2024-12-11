import { z } from 'zod'

const isRequiredText = 'Campo obrigatório'

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/

export const productSchema = z.object({
  model: z.string({ required_error: isRequiredText }).min(1, isRequiredText),
  brand: z.string({ required_error: isRequiredText }).min(1, isRequiredText),
  price: z.number({ required_error: isRequiredText }).min(0, 'Preço inválido'),
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

export type ProductSchemaProps = z.infer<typeof productSchema>
