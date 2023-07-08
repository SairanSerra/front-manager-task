/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { InputRef } from 'antd'
import type { PropsInputCustom } from './types'

import * as Styled from './styles'

export const Input = forwardRef<InputRef, PropsInputCustom>(
  ({ label, placeholder = 'Digite um valor...', ...props }, ref) => {
    return (
      <Styled.ContainerMaster>
        {label && <Styled.Label>{label}</Styled.Label>}
        <Styled.CustomInput placeholder={placeholder} ref={ref} {...props} />
      </Styled.ContainerMaster>
    )
  },
)
