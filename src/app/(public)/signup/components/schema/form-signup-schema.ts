import { sendFormat } from '@/utils'
import { z } from 'zod'

export const formSignupSchema = z
  .object({
    name: z.string().nonempty('Insira um nome'),
    email: z.string().email('Insira um email válido'),
    phone: z
      .string()
      .nonempty('Número celular é obrigatório')
      .regex(
        /^\(?(0?[1-9]{2})\)?[-. ]?[9](\d{4})[-. ]?(\d{4})$/,
        'Número celular inválido',
      )
      .transform((phoneNumber) => {
        return sendFormat(phoneNumber)
      }),
    password: z.string().nonempty('Insira uma senha'),
    confirmPassword: z.string().nonempty('Por favor confirme a senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas estão divergentes',
    path: ['password'],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas estão divergentes',
    path: ['confirmPassword'],
  })
