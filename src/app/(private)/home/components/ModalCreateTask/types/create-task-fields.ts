import { formCreateTaskSchema } from './../schema/form-create-task-schema'
import { z } from 'zod'

export type createTaskFields = z.infer<typeof formCreateTaskSchema>
