import { z } from 'zod'
import { formLoginSchema } from '../Schema'

export type PropsFormLogin = z.infer<typeof formLoginSchema>
