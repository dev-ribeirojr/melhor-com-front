import {
  productSchema,
  ProductSchemaProps,
} from '@/components/_ui/form-product/product-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function useNewProduct() {
  const form = useForm<ProductSchemaProps>({
    resolver: zodResolver(productSchema),
  })
  // buscar o produto pelo codigo e setar os valores do form
  function onSubmit(data: ProductSchemaProps) {
    console.log(data)
    // editar dados
  }

  return { form, onSubmit }
}
