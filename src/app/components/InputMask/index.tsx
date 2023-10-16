import React from 'react'
import * as Styled from './styles'
import { InputMaksProps } from './types'

export function InputMask({
  mask = '',
  maskChar = null,
  error = false,
  label,
  errorMessage,
  ...rest
}: InputMaksProps) {
  const classAntd = 'ant-input css-3mqfnx sc-jrsKJM iWNsJF'
  const classAntdWithError =
    'ant-input ant-input-status-error css-3mqfnx sc-jrsKJM iWNsJF'
  return (
    <Styled.ContainerMaster>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.InputMaskCustom
        className={error ? classAntdWithError : classAntd}
        maskChar={maskChar}
        mask={mask}
        {...rest}
      />
      <Styled.LabelError>{errorMessage}</Styled.LabelError>
    </Styled.ContainerMaster>
  )
}
