import { ProductSchemaProps } from '@/components/_ui/form-product/product-schema'
import { apiMelhorCom } from '@/services'
import { PhoneProps } from '@/types'
import toast from 'react-hot-toast'

export async function createPhone(
  data: ProductSchemaProps,
): Promise<PhoneProps | null> {
  try {
    const response = await apiMelhorCom.post<PhoneProps>('phone', data)
    toast.success('Produto registrado com sucesso')
    return response.data

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    toast.error('Ops! Ocorreu um erro interno ao tentar registrar o produto')
    return null
  }
}
