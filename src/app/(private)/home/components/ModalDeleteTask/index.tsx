import React from 'react'
import * as Styled from './styles'
import Button from '@/app/components/Button'
import { Modal } from 'antd'
import { PropsModalDelete } from './types'
import { Spinner } from '@/app/components'

export function ModalDeleteTask({
  onClickCancel,
  onClickConfirm,
  isLoading,
  openModal,
}: PropsModalDelete) {
  return (
    <Modal
      title="Excluir Tarefa"
      style={{ top: 20 }}
      open={openModal}
      onCancel={onClickCancel}
      footer={
        isLoading ? (
          <Styled.ContainerLoading>
            <Spinner />
          </Styled.ContainerLoading>
        ) : (
          <Styled.ContainerFooterModal>
            <Button title="Cancelar" type="dashed" onClick={onClickCancel} />
            <Button title="Excluir" onClick={onClickConfirm} />
          </Styled.ContainerFooterModal>
        )
      }
      confirmLoading={false}
    >
      <Styled.ContainerMaster>
        <Styled.TextTitle>
          Deseja realmente Excluir esta tarefa?
        </Styled.TextTitle>
        <Styled.TextDescription>
          Após excluir esta tarefa não poderá mais ser gerenciado seu status!
        </Styled.TextDescription>
      </Styled.ContainerMaster>
    </Modal>
  )
}
