/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react'
import type { TypeForm } from '../components/ModalCreateTask/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { taskService } from '@/services/http'
import { Toast } from '@/app/components'
import { useTaskStore } from '@/store/modules/Task'
import { TypeStatusTask } from '@/@types/base-types'

export function useHome() {
  const [openModalCreateTask, setOpenModalCreateTask] = useState(false)
  const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false)
  const [filterStatus, setFilterStatus] = useState<TypeStatusTask | undefined>(
    undefined,
  )
  const [typeForm, setTypeForm] = useState<TypeForm>('CREATE')
  const [idTask, setIdTask] = useState(0)
  const [page, setPage] = useState(1)

  const { setTaskSpecific, setClearTaskSpecific } = useTaskStore()

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['list-task', page, filterStatus],
    queryFn: () => taskService.listTask({ page, status: filterStatus }),
  })

  const { mutate: getTaskSpecific, isLoading: loadingGetTaskSpecific } =
    useMutation({
      mutationKey: ['taks-specific'],
      mutationFn: (id: number) => taskService.specificTask({ id }),
      onSuccess: ({ content }) => {
        setTaskSpecific({
          description: content.description!,
          name: content.name!,
          status: content.status!,
          id: content.id!,
        })
        setOpenModalCreateTask(true)
      },
      onError: () => Toast('error', 'Falha ao Carregar tarefa'),
    })

  const { mutate: deleteTask, isLoading: loadingDeleteTask } = useMutation({
    mutationKey: ['delete-task'],
    mutationFn: (idTask: number) => taskService.deleteTask({ id: idTask }),
    onSuccess: () => {
      refetch()
      Toast('success', 'Tarefa excluída com sucesso')
      setOpenModalDeleteTask(false)
    },
  })

  const handleModalAndSetTypeModal = (type: TypeForm, idTask?: number) => {
    setClearTaskSpecific()
    setTypeForm(type)

    const isModalToCreateTask = type === 'CREATE'

    if (isModalToCreateTask) {
      return setOpenModalCreateTask(true)
    }

    getTaskSpecific(idTask!)
  }
  const closeModal = () => {
    setOpenModalCreateTask(false)
  }
  const handleDeleteTask = useCallback(() => {
    deleteTask(idTask)
  }, [idTask, deleteTask])

  const handleOpenModalDelete = (id: number) => {
    setIdTask(id)
    setOpenModalDeleteTask(true)
  }

  const handlePageChange = (numberPage: number) => {
    setPage(numberPage)
  }

  const contentTable =
    data?.content !== undefined && !isError ? data.content.data : []
  const hasExistPaginate = !!(
    data?.content !== undefined &&
    data.content.meta.last_page! > 1 &&
    !isError
  )
  const totalItems = hasExistPaginate ? data.content.meta.total! : 0

  const loadingPage = isLoading || loadingGetTaskSpecific
  return {
    openModalCreateTask,
    setClearTaskSpecific,
    handleModalAndSetTypeModal,
    typeForm,
    closeModal,
    handlePageChange,
    handleDeleteTask,
    setOpenModalDeleteTask,
    openModalDeleteTask,
    handleOpenModalDelete,
    contentTable,
    page,
    totalItems,
    hasExistPaginate,
    loadingPage,
    setFilterStatus,
    filterStatus,
    loadingDeleteTask,
  }
}
