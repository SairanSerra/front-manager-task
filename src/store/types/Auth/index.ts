import { IResponseLogin } from '@/services/types'

export interface AuthState {
  user: IResponseLogin
  setUserState: (data: IResponseLogin) => void
}
