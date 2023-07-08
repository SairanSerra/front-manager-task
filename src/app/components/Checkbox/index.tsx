import React from 'react'
import { CheckboxProps } from 'antd'
import { CheckboxCustom } from './styles'

export function Checkbox({ ...rest }: CheckboxProps) {
  return <CheckboxCustom {...rest} />
}
