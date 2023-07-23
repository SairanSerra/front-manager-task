import React from 'react'
import * as Styled from './styles'
import { IconEyeOpenOrClose, Input, InputMask, Spinner } from '@/app/components'
import Button from '@/app/components/Button'
import { useFormSignup } from '../hooks'
import { Controller } from 'react-hook-form'

export function FormSignUP() {
  const {
    control,
    handleSubmit,
    HandleSubmitCreateAccount,
    openEyeConfirmPassword,
    openEyePassword,
    HandleChangeEye,
    errors,
    isLoading,
    HandleNavigateLogin,
  } = useFormSignup()
  return (
    <Styled.ContainerMaster>
      <Styled.ContainerTitle>
        <Styled.Title>Cadastrar-se</Styled.Title>
        <Styled.TextDescription>
          Após concluir o cadastro, você terá acesso a recursos poderosos de
          gerenciamento de atividades, incluindo a capacidade de criar, editar e
          acompanhar suas tarefas.
        </Styled.TextDescription>
      </Styled.ContainerTitle>
      <Styled.ContainerFields>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Nome*"
              error={errors.name !== undefined}
              errorMessage={
                errors.name !== undefined ? errors.name.message : ''
              }
              placeholder="Ex: Maria"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputMask
              mask="(99) 99999-9999"
              label="Telefone*"
              error={errors.phone !== undefined}
              placeholder="Ex: (11) 9 9999-9999"
              errorMessage={
                errors.phone !== undefined ? errors.phone.message : ''
              }
              onChange={onChange}
              value={value}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Email*"
              placeholder="exemplo@exemplo.com.br"
              error={errors.email !== undefined}
              errorMessage={
                errors.email !== undefined ? errors.email.message : ''
              }
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Senha*"
              type={openEyePassword ? 'password' : 'text'}
              placeholder="*********"
              error={errors.password !== undefined}
              errorMessage={
                errors.password !== undefined ? errors.password.message : ''
              }
              suffix={
                <IconEyeOpenOrClose
                  open={openEyePassword}
                  onClick={() => HandleChangeEye('password')}
                />
              }
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Confirme a senha*"
              type={openEyeConfirmPassword ? 'password' : 'text'}
              placeholder="*********"
              error={errors.confirmPassword !== undefined}
              errorMessage={
                errors.confirmPassword !== undefined
                  ? errors.confirmPassword.message
                  : ''
              }
              suffix={
                <IconEyeOpenOrClose
                  open={openEyeConfirmPassword}
                  onClick={() => HandleChangeEye('confirmPassword')}
                />
              }
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Styled.ContainerFields>

      {isLoading ? (
        <Styled.ContainerLoading>
          <Spinner />
        </Styled.ContainerLoading>
      ) : (
        <>
          <Button
            title="Cadastrar"
            onClick={handleSubmit(HandleSubmitCreateAccount)}
          />
          <Styled.ContainerSigin>
            <Styled.TextSigin>
              Já tem uma conta?
              <Styled.LinkSigin onClick={HandleNavigateLogin}>
                Entrar
              </Styled.LinkSigin>
            </Styled.TextSigin>
          </Styled.ContainerSigin>
        </>
      )}
    </Styled.ContainerMaster>
  )
}
