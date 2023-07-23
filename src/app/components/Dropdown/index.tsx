import React from 'react'
import { Select } from 'antd'
import type { PropsDropwdownCustom } from './type'
import * as Styled from './styles'

const DropdownCustom: React.FC<PropsDropwdownCustom> = ({
  options,
  defaultValue,
  onChange,
  placeholder,
  label,
  disabled = false,
  value,
}) => (
  <Styled.ContainerMaster>
    {label && <Styled.Label>{label}</Styled.Label>}
    <Select
      defaultValue={defaultValue}
      value={value}
      style={{ width: '100%' }}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      disabled={disabled}
    />
  </Styled.ContainerMaster>
)

export default DropdownCustom
