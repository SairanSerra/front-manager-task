import type { createTaskFields } from '@/app/(private)/home/components/ModalCreateTask/types'

export interface FieldsTask extends createTaskFields {
  id: number
}
export interface TaskState {
  taskSpecific: FieldsTask
  setTaskSpecific: (data: FieldsTask) => void
  setClearTaskSpecific: () => void
}
