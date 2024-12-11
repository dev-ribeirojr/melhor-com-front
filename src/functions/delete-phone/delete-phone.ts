import { apiMelhorCom } from '@/services'
import { PhoneProps } from '@/types'
import toast from 'react-hot-toast'

export async function deletePhone(phoneId: number): Promise<PhoneProps | null> {
  try {
    const response = await apiMelhorCom.delete<PhoneProps>(`phone/${phoneId}`)
    return response.data
  } catch (error) {
    const _error = error as Error
    if (_error.message === 'internal server error') {
      toast.error('Ops! Ocorreu um erro interno ao tentar excluir')
      return null
    }
    toast.error('Ops! Ocorreu um erro interno')
    return null
  }
}
