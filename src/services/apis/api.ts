import { useAuthStore } from '@/store'
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})

api.interceptors.request.use((config) => {
  const { user } = useAuthStore.getState()
  const token = user.token
  const tokenExist = token !== '' && token !== undefined
  if (tokenExist) {
    const tokenBearer = `Bearer ${token}`
    config.headers.Authorization = tokenBearer
  }

  return config
})
