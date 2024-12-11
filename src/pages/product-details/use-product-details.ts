import {
  productSchema,
  ProductSchemaProps,
} from '@/components/_ui/form-product/product-schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function useProductDetails() {
  const form = useForm<ProductSchemaProps>({
    resolver: zodResolver(productSchema),
  })
  const [isLoading, setIsLoading] = useState(false)
  function onSubmit(data: ProductSchemaProps) {
    try {
      setIsLoading(true)
      console.log(data)

      toast.success('Produto atualizado com sucesso.')
    } catch (error) {
      console.log(error)
      toast.error('Error ao tentar atualizar o produto.')
    } finally {
      setIsLoading(false)
    }
  }

  return { form, isLoading, onSubmit }
}
