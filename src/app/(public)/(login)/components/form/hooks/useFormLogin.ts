import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PropsFormLogin } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { formLoginSchema } from '../Schema'
import { useRouter } from 'next/navigation'
import { Toast } from '@/app/components'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/http'
import type { ContentIResponseLogin, IRequestLogin } from '@/services/types'
import { AxiosError } from 'axios'
import { DefaultResponseWithContent } from '@/@types/base-types'
import { useAuthStore } from '@/store'
import { Routes } from '@/constants'

export function useFormLogin() {
  const [iconEyeOpen, setIcoEyeOpen] = useState(true)
  const { setUserState, rememberEmail, setRememberEmail } = useAuthStore()
  const { push } = useRouter()
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<PropsFormLogin>({
    defaultValues: {
      email: rememberEmail,
      password: '',
      rememberMe: rememberEmail !== '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(formLoginSchema),
  })

  const HandleChangeEye = useCallback(() => {
    return setIcoEyeOpen(!iconEyeOpen)
  }, [iconEyeOpen])

  const onError = (error: AxiosError) => {
    const statusCode = error.response?.status
    const useNotExist = statusCode === 404
    const errorUser = statusCode === 401 || statusCode === 404
    const message = useNotExist
      ? 'Usuário não cadastrado'
      : 'Email/Senha Incorretos'
    Toast('error', errorUser ? message : 'Falha ao realizar login')
  }

  const onSuccess = ({
    content,
  }: DefaultResponseWithContent<ContentIResponseLogin>) => {
    const { name, email, phone } = content.user
    const { token } = content.token
    const objectUser = {
      name,
      email,
      phone,
      token,
    }
    setUserState(objectUser)
    push(Routes.private.home)
    reset()
  }
  const { mutate } = useMutation(
    ['login'],
    (data: IRequestLogin) => authService.login(data),
    {
      onError,
      onSuccess,
    },
  )

  const HandleSubmitLogin = ({ rememberMe, ...rest }: PropsFormLogin) => {
    setRememberEmail(rememberMe ? rest.email : '')
    mutate(rest)
  }

  return {
    iconEyeOpen,
    HandleChangeEye,
    control,
    handleSubmit,
    HandleSubmitLogin,
    push,
    errors,
  }
}
