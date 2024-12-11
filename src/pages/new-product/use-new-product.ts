import {
  productSchema,
  ProductSchemaProps,
} from '@/components/_ui/form-product/product-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function useNewProduct() {
  const form = useForm<ProductSchemaProps>({
    resolver: zodResolver(productSchema),
  })
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(data: ProductSchemaProps) {
    try {
      setIsLoading(true)
      console.log(data)

      toast.success('Produto registrado com sucesso.')
    } catch (error) {
      console.log(error)
      toast.error('Error ao tentar registrar o produto.')
    } finally {
      setIsLoading(false)
    }
  }

  return { form, isLoading, onSubmit }
}
