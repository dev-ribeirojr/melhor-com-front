import { ProductSchemaProps } from '@/components/_ui/form-product/product-schema'
import { apiMelhorCom } from '@/services'
import { PhoneProps } from '@/types'
import toast from 'react-hot-toast'

interface UpdatePhoneProps extends ProductSchemaProps {
  phoneId: string
}

export async function updatePhone(
  data: UpdatePhoneProps,
): Promise<PhoneProps | null> {
  const { phoneId, ...rest } = data
  try {
    const response = await apiMelhorCom.put<PhoneProps>(
      `phone/${phoneId}`,
      rest,
    )
    toast.success('Produto Atualizado com sucesso')
    return response.data

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    toast.error('Ops! Ocorreu um erro interno ao tentar atualizar o produto')
    return null
  }
}
