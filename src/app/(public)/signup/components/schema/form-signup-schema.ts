import { z } from 'zod'

export const formSignupSchema = z.object({
  name: z.string().nonempty('Por Favor isira um nome'),
  email: z.string().email('Insira um email válido'),
  phone: z.string().nonempty(),
})
