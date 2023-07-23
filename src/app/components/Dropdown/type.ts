export type PropsOptions = {
  label: string
  value: string
}
export interface PropsDropwdownCustom {
  options: PropsOptions[]
  defaultValue?: string
  onChange: (v: string) => void
  placeholder?: string
  label?: string
  error?: boolean
  disabled?: boolean
  value?: string
}
