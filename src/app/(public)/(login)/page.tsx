'use client'
import React from 'react'
import * as Styled from './styles'
import { Logo } from '@/app/components'
import { FormLogin } from './components'

export default function Login() {
  return (
    <Styled.ContainerMaster>
      <Styled.Card>
        <Styled.ContainerContent>
          <Logo />
          <Styled.ContainerDescription>
            <Styled.Title>Bem-Vindo</Styled.Title>
            <Styled.TextDescription>
              Uma maneira diferente para organizar suas tarefas
            </Styled.TextDescription>
          </Styled.ContainerDescription>
          <FormLogin />
        </Styled.ContainerContent>
      </Styled.Card>
    </Styled.ContainerMaster>
  )
}
