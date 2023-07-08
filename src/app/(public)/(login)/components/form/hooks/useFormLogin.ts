import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PropsFormLogin } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { formLoginSchema } from '../Schema'
import { useRouter } from 'next/navigation'

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
  console.log(errors)
  const HandleChangeEye = useCallback(() => {
    return setIcoEyeOpen(!iconEyeOpen)
  }, [iconEyeOpen])

  const { push } = useRouter()

  const HandleSubmitLogin = (data: PropsFormLogin) => {
    console.log(data)
  }

  return {
    iconEyeOpen,
    HandleChangeEye,
    control,
    handleSubmit,
    HandleSubmitLogin,
    push,
  }
}
