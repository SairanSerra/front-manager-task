import { useAuthStore } from '@/store/index'

export const checkUserIsAuthenticated = () => {
  const { token } = useAuthStore.getState().user

  return !!token
}
