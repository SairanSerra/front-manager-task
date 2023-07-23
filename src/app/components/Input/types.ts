import { InputProps } from 'antd'

export type PropsInputCustom = InputProps & {
  label?: string
  error?: boolean
  errorMessage?: string
}
