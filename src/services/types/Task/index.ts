import { TypeStatusTask } from '@/@types/base-types'

export interface IRequestListTask {
  page: number
  status?: TypeStatusTask
}

export interface IRequestCreateTask {
  name: string
  description: string
  status: TypeStatusTask
}

export interface IRequestDeleteTask {
  id: number
}

export interface IRequestUpdateTask {
  name: string
  description: string
  status: string
  id: number
}

export interface Meta {
  total?: number
  per_page?: number
  current_page?: number
  last_page?: number
  first_page?: number
  first_page_url?: string
  last_page_url?: string
}

export interface Data {
  id?: number
  name?: string
  description?: string
  status?: TypeStatusTask
  createdAt?: string
}
export interface ContentResponseListTask {
  meta: Meta
  data: Data[]
}
export interface IRequestTaskSpecific {
  id: number
}
