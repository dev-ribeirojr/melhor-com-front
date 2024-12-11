import axios from 'axios'

const apiMelhorCom = axios.create({
  baseURL: import.meta.env.VITE_API_MELHOR_COM_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    cpf: import.meta.env.VITE_CPF_VALUE,
  },
  timeout: 10000,
})

export { apiMelhorCom }
