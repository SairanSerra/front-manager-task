import {
  DefaultResponse,
  DefaultResponseWithContent,
} from '@/@types/base-types'
import { api } from '@/services/apis'
import {
  ContentIResponseLogin,
  IRequestCreateUser,
  IRequestLogin,
} from '@/services/types'

export const authService = {
  login: async (request: IRequestLogin) => {
    const response = await api.post<
      DefaultResponseWithContent<ContentIResponseLogin>
    >('/v1/login', request)
    return response.data
  },
  loggout: async () => {
    const response = await api.post<DefaultResponse>('/v1/loggout')
    return response.data
  },
  createUser: async (request: IRequestCreateUser) => {
    const response = await api.post<DefaultResponse>('/v1/user/create', request)
    return response.data
  },
}
