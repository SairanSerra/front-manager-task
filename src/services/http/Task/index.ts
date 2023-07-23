import {
  DefaultResponse,
  DefaultResponseWithContent,
} from '@/@types/base-types'
import { api } from '@/services/apis'
import {
  ContentResponseListTask,
  Data,
  IRequestCreateTask,
  IRequestDeleteTask,
  IRequestListTask,
  IRequestTaskSpecific,
  IRequestUpdateTask,
} from '@/services/types'

export const taskService = {
  listTask: async (params: IRequestListTask) => {
    const response = await api.get<
      DefaultResponseWithContent<ContentResponseListTask>
    >('/v1/task', {
      params,
    })
    return response.data
  },
  createTask: async (request: IRequestCreateTask) => {
    const response = await api.post<DefaultResponse>('/v1/task', request)
    return response.data
  },
  deleteTask: async (params: IRequestDeleteTask) => {
    const response = await api.delete<DefaultResponse>('/v1/task', { params })
    return response.data
  },
  updateTask: async (request: IRequestUpdateTask) => {
    const response = await api.put<DefaultResponse>('/v1/task', { ...request })
    return response.data
  },
  specificTask: async (params: IRequestTaskSpecific) => {
    const response = await api.get<DefaultResponseWithContent<Data>>(
      '/v1/task/specific',
      { params },
    )
    return response.data
  },
}
