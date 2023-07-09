import { useForm } from 'react-hook-form'
import { PropsFormSignup } from '../types/form-signup-fields'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSignupSchema } from '../schema/form-signup-schema'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useFormSignup() {
  const [openEyePassword, setOpenEyePassword] = useState(false)
  const [openEyeConfirmPassword, setOpenEyeConfirmPassword] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PropsFormSignup>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(formSignupSchema),
  })
  const { push } = useRouter()
  const HandleSubmitCreateAccount = (data: PropsFormSignup) => {
    console.log(data)
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
  }
}
