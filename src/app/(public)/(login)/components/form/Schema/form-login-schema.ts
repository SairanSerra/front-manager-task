import { Toast } from '@/app/components'
import { z } from 'zod'

export const formLoginSchema = z
  .object({
    email: z
      .string()
      .email('Insira um email válido')
      .nonempty('Por favor, insira o email'),
    password: z.string().nonempty('Por favor, insira a senha'),
    rememberMe: z.boolean(),
  })
  .superRefine((values) => {
    const isInvalidValues = !values.email && !values.password
    if (isInvalidValues) {
      Toast('error', 'Credenciais Inválidas')
    }
  })
