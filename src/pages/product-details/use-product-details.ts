import {
  productSchema,
  ProductSchemaProps,
} from '@/components/_ui/form-product/product-schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { getPhoneById, updatePhone } from '@/functions'

export function useProductDetails() {
  const form = useForm<ProductSchemaProps>({
    resolver: zodResolver(productSchema),
  })
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingItem, setIsLoadingItem] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function getPhone() {
      if (id) {
        const response = await getPhoneById(id)

        if (!response) {
          navigate('/')
        }

        form.reset({
          brand: response?.brand,
          color: response?.color,
          date: response?.date,
          endDate: response?.endDate,
          model: response?.model,
          price: response?.price,
        })
      }
      if (!id) {
        navigate('/')
      }
      setIsLoadingItem(false)
    }

    getPhone()
  }, [])

  async function onSubmit(data: ProductSchemaProps) {
    if (id) {
      setIsLoading(true)
      const response = await updatePhone({ phoneId: id, ...data })
      if (!response) {
        toast.error('Ops! Ocorreu um erro ao tentar atualizar este produto')
      }
      form.reset({
        brand: response?.brand,
        color: response?.color,
        date: response?.date,
        endDate: response?.endDate,
        model: response?.model,
        price: response?.price,
      })

      setIsLoading(false)
    }
  }

  return { form, isLoading, isLoadingItem, onSubmit }
}
