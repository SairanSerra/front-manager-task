import React from 'react'
import * as Styled from './styles'
import { Checkbox, IconEyeOpenOrClose, Input } from '@/app/components'
import Button from '@/app/components/Button'
import { useFormLogin } from './hooks'
import { Controller } from 'react-hook-form'

export function FormLogin() {
  const {
    HandleChangeEye,
    iconEyeOpen,
    HandleSubmitLogin,
    handleSubmit,
    control,
    push,
    errors,
  } = useFormLogin()
  return (
    <Styled.ContainerMaster>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Email"
            error={errors.email !== undefined}
            onChange={onChange}
            value={value}
            placeholder="exemplo@exemplo.com"
          />
        )}
      />

      <Styled.ContainerPassword>
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Senha"
              placeholder="*******"
              onChange={onChange}
              error={errors.password !== undefined}
              value={value}
              type={iconEyeOpen ? 'password' : 'text'}
              suffix={
                <IconEyeOpenOrClose
                  open={iconEyeOpen}
                  onClick={HandleChangeEye}
                />
              }
            />
          )}
        />
        <Styled.ContainerRememberMe>
          <Checkbox />
          <Styled.LabelCheckbox>Lembrar-me</Styled.LabelCheckbox>
        </Styled.ContainerRememberMe>
      </Styled.ContainerPassword>

      <Styled.ContainerButtonAndDescriptions>
        <Button title="Entrar" onClick={handleSubmit(HandleSubmitLogin)} />
        <Styled.TextNewAccount>
          Ainda não tem uma conta?{' '}
          <Styled.LinkRegisterAccount onClick={() => push('/signup')}>
            Criar Conta
          </Styled.LinkRegisterAccount>
        </Styled.TextNewAccount>
      </Styled.ContainerButtonAndDescriptions>
    </Styled.ContainerMaster>
  )
}
