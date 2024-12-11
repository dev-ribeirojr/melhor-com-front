import { z } from 'zod'

const isRequiredText = 'Campo obrigatório'

export const productSchema = z.object({
  model: z.string({ required_error: isRequiredText }).min(1, isRequiredText),
  brand: z.string({ required_error: isRequiredText }).min(1, isRequiredText),
  price: z.number({ required_error: isRequiredText }).min(0, 'Preço inválido'),
  date: z.string({ required_error: isRequiredText }).min(1, isRequiredText),
  endDate: z.string({ required_error: isRequiredText }).min(1, isRequiredText),
  color: z.enum(['BLACK', 'WHITE', 'GOLD', 'PINK'], {
    message: 'Cor inválida',
  }),
  code: z.string({ required_error: isRequiredText }).min(1, isRequiredText),
})

export type ProductSchemaProps = z.infer<typeof productSchema>
