/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { InputRef } from 'antd'
import type { PropsInputCustom } from './types'

import * as Styled from './styles'

export const Input = forwardRef<InputRef, PropsInputCustom>(
  (
    {
      label,
      error = false,
      errorMessage,
      placeholder = 'Digite um valor...',
      ...props
    },
    ref,
  ) => {
    return (
      <Styled.ContainerMaster>
        {label && <Styled.Label>{label}</Styled.Label>}
        <Styled.CustomInput
          status={error ? 'error' : undefined}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <Styled.LabelError>{errorMessage}</Styled.LabelError>
      </Styled.ContainerMaster>
    )
  },
)
