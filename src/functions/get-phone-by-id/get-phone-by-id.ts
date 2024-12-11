import { apiMelhorCom } from '@/services'
import { PhoneProps } from '@/types'

export async function getPhoneById(id: string): Promise<PhoneProps | null> {
  try {
    const response = await apiMelhorCom.get<PhoneProps>(`phone/${id}`, {
      method: 'GET',
    })
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null
  }
}
