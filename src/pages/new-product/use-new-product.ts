import {
  productSchema,
  ProductSchemaProps,
} from '@/components/_ui/form-product/product-schema'
import { createPhone } from '@/functions/create-phone'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export function useNewProduct() {
  const form = useForm<ProductSchemaProps>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      brand: undefined,
      color: undefined,
      date: undefined,
      endDate: undefined,
      model: undefined,
      price: undefined,
    },
  })
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: ProductSchemaProps) {
    setIsLoading(true)
    await createPhone(data)
    form.reset()
    navigate('/')
    setIsLoading(false)
  }

  return { form, isLoading, onSubmit }
}
