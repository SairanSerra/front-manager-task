import { DataUser } from '@/services/types'

export interface AuthState {
  user: DataUser
  rememberEmail: string
  setRememberEmail: (data: string) => void
  setUserState: (data: DataUser) => void
  setLoggout: () => void
}
