import { useForm } from 'react-hook-form'
import { PropsFormSignup } from '../types/form-signup-fields'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSignupSchema } from '../schema/form-signup-schema'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/http'
import { IRequestCreateUser } from '@/services/types'
import type { AxiosError } from 'axios'
import { Toast } from '@/app/components'

export function useFormSignup() {
  const [openEyePassword, setOpenEyePassword] = useState(false)
  const [openEyeConfirmPassword, setOpenEyeConfirmPassword] = useState(false)
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PropsFormSignup>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      confirmPassword: '',
      email: '',
      name: '',
      password: '',
      phone: '',
    },
    resolver: zodResolver(formSignupSchema),
  })
  const { push } = useRouter()

  const onError = (err: AxiosError) => {
    const statusCode = err.response?.status
    const userHasExist = statusCode === 400
    const message = userHasExist
      ? 'Email já cadastrado'
      : 'Falha ao cadastrar Cliete'
    Toast('error', message)
  }
  const onSuccess = () => {
    reset()
    HandleNavigateLogin()
    Toast('success', 'Usuário cadastrado com sucesso')
  }

  const { mutate, isLoading } = useMutation(
    ['create-user'],
    (data: IRequestCreateUser) => authService.createUser(data),
    {
      onError,
      onSuccess,
    },
  )
  const HandleSubmitCreateAccount = (data: PropsFormSignup) => {
    mutate(data)
  }

  const HandleChangeEye = useCallback(
    (field: 'password' | 'confirmPassword') => {
      if (field === 'password') {
        return setOpenEyePassword(!openEyePassword)
      }
      return setOpenEyeConfirmPassword(!openEyeConfirmPassword)
    },
    [openEyePassword, openEyeConfirmPassword],
  )

  const HandleNavigateLogin = () => {
    push('/')
  }

  return {
    control,
    handleSubmit,
    errors,
    HandleSubmitCreateAccount,
    HandleChangeEye,
    openEyePassword,
    openEyeConfirmPassword,
    HandleNavigateLogin,
    isLoading,
  }
}
