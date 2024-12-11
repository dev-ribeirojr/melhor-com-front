import { deletePhone } from '@/functions'
import { useState } from 'react'

export function useButtonDeletePhone() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(phoneId: number) {
    setIsLoading(true)
    const response = await deletePhone(phoneId)
    if (response) {
      window.location.reload()
    }
    setIsLoading(false)
  }
  return { isLoading, onSubmit }
}
