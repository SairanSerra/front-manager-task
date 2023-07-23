/* eslint-disable no-var */
import Button from '@/app/components/Button'
import { Tag } from 'antd'
import type { TypeForm } from '../components/ModalCreateTask/types'
import type { TypeStatusTask } from '@/@types/base-types'
import { formatStatusTask } from '../functions'

export const tableTasks = (
  openShowModalForm: (data: TypeForm, idTask?: number) => void,
  openModalDeleteTask: (idTask: number) => void,
) => [
  { title: 'Nome Tarefa', key: 1, dataIndex: 'name' },
  { title: 'Descrição', key: 2, dataIndex: 'description' },
  {
    title: 'Status',
    key: 3,
    dataIndex: 'status',
    render: (status: TypeStatusTask) => {
      return (
        <Tag
          color={
            (status === 'INPROGRESS' && 'blue') ||
            (status === 'COMPLETED' && 'green') ||
            'default'
          }
          key={status}
        >
          {formatStatusTask(status)}
        </Tag>
      )
    },
  },
  { title: 'Data criação', key: 4, dataIndex: 'createdAt' },
  {
    title: '',
    key: 4,
    dataIndex: 'id',
    render: (id: number) => {
      return (
        <div style={{ display: 'flex', gap: '4%' }}>
          <Button
            onClick={() => openShowModalForm('VIEW', id)}
            title="Visualizar"
            size="small"
          />
          <Button
            onClick={() => openShowModalForm('UPDATE', id)}
            title="Editar"
            type="default"
            size="small"
          />
          <Button
            onClick={() => openModalDeleteTask(id)}
            title="Excluir"
            danger
            size="small"
          />
        </div>
      )
    },
  },
]
