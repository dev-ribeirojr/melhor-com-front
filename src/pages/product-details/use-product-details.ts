import {
  productSchema,
  ProductSchemaProps,
} from '@/components/_ui/form-product/product-schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function useProductDetails() {
  const form = useForm<ProductSchemaProps>({
    resolver: zodResolver(productSchema),
  })
  function onSubmit(data: ProductSchemaProps) {
    console.log(data)
    // editar dados
  }

  return { form, onSubmit }
}
