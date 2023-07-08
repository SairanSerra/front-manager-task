import { message } from 'antd'
import { TypeToast } from './types'

export function Toast(type: TypeToast, textMessage: string) {
  message[type](textMessage)
  return null
}
