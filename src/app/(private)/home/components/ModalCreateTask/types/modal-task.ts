export type TypeForm = 'VIEW' | 'UPDATE' | 'CREATE'

export interface PropsModalCreateTask {
  onClose: () => void
  openModal: boolean
  typeForm: TypeForm
}
