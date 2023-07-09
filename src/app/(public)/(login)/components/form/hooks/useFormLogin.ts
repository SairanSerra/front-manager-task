import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PropsFormLogin } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { formLoginSchema } from '../Schema'
import { useRouter } from 'next/navigation'
import { Toast } from '@/app/components'

export function useFormLogin() {
  const [iconEyeOpen, setIcoEyeOpen] = useState(false)
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PropsFormLogin>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(formLoginSchema),
  })

  const HandleChangeEye = useCallback(() => {
    return setIcoEyeOpen(!iconEyeOpen)
  }, [iconEyeOpen])

  const { push } = useRouter()

  const HandleSubmitLogin = (data: PropsFormLogin) => {
    Toast('error', 'Login')
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
