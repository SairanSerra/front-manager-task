'use client'
import React from 'react'
import * as Styled from './styles'
import Image from 'next/image'
import { FormSignUP } from './components'

export default function SignUP() {
  return (
    <Styled.ContainerMaster>
      <Styled.ContainerDescription>
        <Image
          alt="Imagem Pessoas em Reunião"
          src="/people-on-meeting.jpg"
          fill
          objectFit="cover"
        />
      </Styled.ContainerDescription>
      <Styled.ContainerForm>
        <FormSignUP />
      </Styled.ContainerForm>
    </Styled.ContainerMaster>
  )
}
