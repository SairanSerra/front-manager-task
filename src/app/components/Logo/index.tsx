import React from 'react'
import { AiOutlineApartment } from 'react-icons/ai'
import * as Styled from './styles'

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <Styled.ContainerMaster>
      <Styled.ContainerElements>
        <AiOutlineApartment size={size} color="#004AAD" />
        <Styled.Title>MT Manager</Styled.Title>
      </Styled.ContainerElements>
    </Styled.ContainerMaster>
  )
}
