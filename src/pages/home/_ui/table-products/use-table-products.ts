import { useEffect, useState } from 'react'
import { PhoneProps } from '../../../../types'
import { getPhones } from '@/functions'

export function useTableProducts() {
  const headerTableItems = [
    {
      id: 1,
      title: 'Código',
    },
    {
      id: 2,
      title: 'Modelo',
    },
    {
      id: 3,
      title: 'Preço',
    },
    {
      id: 4,
      title: 'Marca',
    },
    {
      id: 5,
      title: 'Cor',
    },

    {
      id: 6,
      title: '',
    },
  ]

  const [phones, setPhones] = useState<PhoneProps[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function execute() {
      const response = await getPhones()
      setPhones(response)
      setIsLoading(false)
    }
    execute()
  }, [])

  return { phones, headerTableItems, isLoadingPhones: isLoading }
}
