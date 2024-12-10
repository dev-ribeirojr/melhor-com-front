import { useState } from 'react'

export function useButtonDeletePhone() {
  const [isLoading, setIsLoading] = useState(false)

  async function deletePhone(phoneCode: string) {
    setIsLoading(true)
    console.log(phoneCode)
    setIsLoading(false)
  }
  return { isLoading, deletePhone }
}
