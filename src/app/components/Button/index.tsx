import React from 'react'
import * as Styled from './styles'
import type { PropsButtonCustom } from './types'

export default function Button({
  type = 'primary',
  title = 'Enviar',
  ...rest
}: PropsButtonCustom) {
  ;<button></button>
  return (
    <Styled.ButtonCustom type={type} {...rest}>
      {title}
    </Styled.ButtonCustom>
  )
}
