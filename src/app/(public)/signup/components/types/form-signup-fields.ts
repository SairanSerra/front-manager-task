import { z } from 'zod'
import { formSignupSchema } from '../schema/form-signup-schema'

export type PropsFormSignup = z.infer<typeof formSignupSchema>
