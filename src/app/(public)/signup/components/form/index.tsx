import React from 'react'
import * as Styled from './styles'
import { Input } from '@/app/components'
import Button from '@/app/components/Button'

export function FormSignUP() {
  return (
    <Styled.ContainerMaster>
      <Styled.ContainerTitle>
        <Styled.Title>Cadastrar-se</Styled.Title>
        <Styled.TextDescription>fdfsdfs</Styled.TextDescription>
      </Styled.ContainerTitle>
      <Styled.ContainerFields>
        <Input label="Nome" placeholder="Ex: Maria" />
        <Input label="Telefone" placeholder="Ex: (11) 9 0000-0000" />
        <Input label="Email" placeholder="exemplo@exemplo.com.br" />
        <Input label="Senha" type="password" placeholder="*********" />
        <Input
          label="Confirme a senha"
          type="password"
          placeholder="*********"
        />
      </Styled.ContainerFields>
      <Button title="Cadastrar" />
    </Styled.ContainerMaster>
  )
}
