import { IRequestCreateTask } from './../../../../../../services/types/Task/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formCreateTaskSchema } from '../schema'
import { createTaskFields } from '../types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { taskService } from '@/services/http'
import { Toast } from '@/app/components'
import { useTaskStore } from '@/store/modules/Task'
import { AxiosError } from 'axios'
import { useEffect } from 'react'

export function useModalCreateTask(
  typeForm: 'CREATE' | 'UPDATE' | 'VIEW',
  onClose: () => void,
  openModal: boolean,
) {
  const isFormView = typeForm === 'VIEW'
  const isFormUpdate = typeForm === 'UPDATE'
  const isFormCreate = typeForm === 'CREATE'
  const payloadTask = useTaskStore().taskSpecific
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<createTaskFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver:
      typeForm !== 'VIEW' ? zodResolver(formCreateTaskSchema) : undefined,
  })

  useEffect(() => {
    const { name, description, status } = payloadTask
    setValue('name', name)
    setValue('description', description)
    setValue('status', status)
  }, [payloadTask, setValue, openModal])

  const query = useQueryClient()

  const onSucess = (message: string) => {
    query.invalidateQueries({ queryKey: ['list-task'] })
    onClose()
    return Toast('success', message)
  }

  const { mutate: updateTask, isLoading: loadingUpdateTask } = useMutation({
    mutationKey: ['update-task'],
    mutationFn: (data: IRequestCreateTask) =>
      taskService.updateTask({ ...data, id: payloadTask.id }),
    onSuccess: () => onSucess('Tarefa atualizada com sucesso'),
    onError: (data: AxiosError) => {
      const statusCode = data.response?.status
      const taskNotFound = statusCode === 404
      const message = taskNotFound
        ? 'Tarefa não encontrada'
        : 'Falha ao atualizar tarefa'
      Toast('error', message)
    },
  })

  const { mutate: createTask, isLoading: loadingCreateTask } = useMutation(
    ['create-task'],
    (data: IRequestCreateTask) => taskService.createTask(data),
    {
      onSuccess: () => onSucess('Tarefa cadastrada com sucesso'),
      onError: (data: AxiosError) => {
        const statusCode = data.response?.status
        const taskNameHasExist = statusCode === 400
        const message = taskNameHasExist
          ? 'Tarefa com o mesmo nome em andamento'
          : 'Falha ao cadastrar tarefa'
        return Toast('error', message)
      },
    },
  )

  const handleTextButtonConfirm = () => {
    if (isFormView) {
      return 'Voltar'
    }
    if (isFormUpdate) {
      return 'Salvar'
    }
    return 'Cadastrar'
  }

  const handleTextTitleModal = () => {
    if (isFormView) {
      return 'Visualizar Tarefa'
    }
    if (isFormUpdate) {
      return 'Atualizar Tarefa'
    }
    return 'Cadastro de Tarefa'
  }

  const inputDisabled = isFormView

  const handleCreateOrEditTask = (data: createTaskFields) => {
    if (isFormView) {
      return onClose()
    }
    if (isFormCreate) {
      return createTask(data)
    }
    if (isFormUpdate) {
      return updateTask(data)
    }
  }

  const loadingPage = loadingCreateTask || loadingUpdateTask

  return {
    control,
    handleSubmit,
    errors,
    handleCreateOrEditTask,
    reset,
    inputDisabled,
    handleTextButtonConfirm,
    handleTextTitleModal,
    watch,
    loadingPage,
    isFormCreate,
  }
}
