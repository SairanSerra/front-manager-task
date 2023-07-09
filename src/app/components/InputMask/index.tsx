import React from 'react'
import * as Styled from './styles'
import { InputMaksProps } from './types'

export function InputMask({
  mask = '',
  maskChar = null,
  error = false,
  label,
  ...rest
}: InputMaksProps) {
  const classAntd =
    'ant-input css-dev-only-do-not-override-14wwjjs sc-bqqOtQ gEcHMp'
  const classAntdWithError =
    'ant-input ant-input-status-error css-dev-only-do-not-override-14wwjjs sc-bqqOtQ gEcHMp'
  return (
    <Styled.ContainerMaster>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.InputMaskCustom
        className={error ? classAntdWithError : classAntd}
        maskChar={maskChar}
        mask={mask}
        {...rest}
      />
    </Styled.ContainerMaster>
  )
}
