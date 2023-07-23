import { z } from 'zod'

export const formCreateTaskSchema = z.object({
  name: z.string().nonempty('Campo obrigatório'),
  description: z.string().nonempty('Campo obrigatório'),
  status: z.enum(['PENDING', 'INPROGRESS', 'COMPLETED']),
})
