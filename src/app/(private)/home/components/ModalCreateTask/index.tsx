import React from 'react'
import type { PropsModalCreateTask } from './types/modal-task'
import { Input, Spinner } from '@/app/components'
import { useModalCreateTask } from './hooks'
import { Controller } from 'react-hook-form'
import DropdownCustom from '@/app/components/Dropdown'
import { itemDropdownStatusCreateTask } from './objects'
import Button from '@/app/components/Button'
import * as Styled from './styles'
import type { TypeStatusTask } from '@/@types/base-types'
import { Modal } from 'antd'

export function ModalCreateTask({
  onClose,
  openModal = false,
  typeForm = 'CREATE',
}: PropsModalCreateTask) {
  const {
    control,
    errors,
    handleCreateOrEditTask,
    handleSubmit,
    reset,
    inputDisabled,
    handleTextButtonConfirm,
    handleTextTitleModal,
    loadingPage,
  } = useModalCreateTask(typeForm, onClose, openModal)
  return (
    <Modal
      title={handleTextTitleModal()}
      style={{ top: 20 }}
      open={openModal}
      onCancel={() => {
        onClose()
      }}
      footer={
        <Styled.ContainerFooterModal>
          {loadingPage ? (
            <Spinner />
          ) : (
            <>
              <Button
                style={{ display: typeForm === 'VIEW' ? 'none' : '' }}
                title="Cancelar"
                type="dashed"
                onClick={() => {
                  onClose()
                  reset()
                }}
              />
              <Button
                title={handleTextButtonConfirm()}
                onClick={handleSubmit(handleCreateOrEditTask)}
              />
            </>
          )}
        </Styled.ContainerFooterModal>
      }
      confirmLoading={false}
      onOk={handleSubmit(handleCreateOrEditTask)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Nome Tarefa*"
            onChange={onChange}
            placeholder="Ex: Compras para casa"
            value={value}
            disabled={inputDisabled}
            error={errors.name !== undefined}
            errorMessage={errors.name !== undefined ? errors.name.message : ''}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Descrição*"
            onChange={onChange}
            disabled={inputDisabled}
            placeholder="Ex: Comprar: Arroz, Feijão ..."
            value={value}
            error={errors.description !== undefined}
            errorMessage={
              errors.description !== undefined ? errors.description.message : ''
            }
          />
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <DropdownCustom
              options={itemDropdownStatusCreateTask}
              disabled={inputDisabled}
              value={value}
              label="Status*"
              onChange={(v) => onChange(v as TypeStatusTask)}
            />
          )
        }}
      />
    </Modal>
  )
}
