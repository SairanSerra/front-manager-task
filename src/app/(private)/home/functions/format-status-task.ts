import type { TypeStatusTask } from '@/@types/base-types'

export const formatStatusTask = (status: TypeStatusTask) => {
  switch (status) {
    case 'PENDING':
      return 'Pendente'
    case 'INPROGRESS':
      return 'Em progresso'
    case 'COMPLETED':
      return 'Finalizado'
  }
}
