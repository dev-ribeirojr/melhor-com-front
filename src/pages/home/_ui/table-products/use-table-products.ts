import { PhoneProps } from '../../../../types'

export function useTableProducts() {
  const phones: PhoneProps[] = [
    {
      model: 'Galaxy 5',
      brand: 'Samsung',
      price: 900,
      date: '26/04/2019',
      endDate: '12/12/2022',
      color: 'BLACK',
      code: '#12212',
    },
    {
      model: 'iPhone 12',
      brand: 'Apple',
      price: 1200,
      date: '15/10/2020',
      endDate: '30/11/2023',
      color: 'WHITE',
      code: '#23222',
    },
    {
      model: 'Pixel 5',
      brand: 'Google',
      price: 850,
      date: '04/09/2020',
      endDate: '10/09/2023',
      color: 'PINK',
      code: '#33456',
    },
    {
      model: 'Xperia 1 II',
      brand: 'Sony',
      price: 1100,
      date: '17/02/2020',
      endDate: '23/06/2022',
      color: 'GOLD',
      code: '#44567',
    },
    {
      model: 'OnePlus 9',
      brand: 'OnePlus',
      price: 999,
      date: '23/03/2021',
      endDate: '19/03/2024',
      color: 'BLACK',
      code: '#55678',
    },
    {
      model: 'Moto G9 Plus',
      brand: 'Motorola',
      price: 600,
      date: '16/09/2020',
      endDate: '05/08/2023',
      color: 'PINK',
      code: '#66789',
    },
    {
      model: 'Nokia 8.3',
      brand: 'Nokia',
      price: 700,
      date: '15/05/2020',
      endDate: '20/10/2023',
      color: 'BLACK',
      code: '#77890',
    },
    {
      model: 'Vivo X60',
      brand: 'Vivo',
      price: 999,
      date: '29/03/2021',
      endDate: '02/06/2024',
      color: 'WHITE',
      code: '#88901',
    },
    {
      model: 'Galaxy S21',
      brand: 'Samsung',
      price: 1400,
      date: '14/01/2021',
      endDate: '15/07/2024',
      color: 'PINK',
      code: '#99012',
    },
    {
      model: 'iPhone 13 Pro',
      brand: 'Apple',
      price: 1500,
      date: '24/09/2021',
      endDate: '22/03/2024',
      color: 'PINK',
      code: '#10123',
    },
  ]

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

  return { phones, headerTableItems }
}
