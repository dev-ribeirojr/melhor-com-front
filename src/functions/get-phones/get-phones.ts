import { apiMelhorCom } from '@/services'
import { PhoneProps } from '@/types'

export async function getPhones(): Promise<PhoneProps[]> {
  try {
    const response = await apiMelhorCom.get<PhoneProps[]>('phone', {
      method: 'GET',
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log('ERRO NA CHAMADA A API', error)
    return []
  }
}
