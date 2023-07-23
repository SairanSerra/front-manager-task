'use client'
import React from 'react'
import * as Styled from './styles'
import Button from '@/app/components/Button'
import { itemDropdownFilter, tableTasks } from './constants'
import { Table, Pagination } from 'antd'
import { ModalCreateTask, ModalDeleteTask } from './components'
import { useHome } from './hooks'
import { Spinner } from '@/app/components'
import DropdownCustom from '@/app/components/Dropdown'
import { TypeStatusTask } from '@/@types/base-types'

export default function Home() {
  const {
    openModalCreateTask,
    handleModalAndSetTypeModal,
    typeForm,
    closeModal,
    openModalDeleteTask,
    setOpenModalDeleteTask,
    handleDeleteTask,
    handleOpenModalDelete,
    contentTable,
    page,
    totalItems,
    hasExistPaginate,
    loadingPage,
    handlePageChange,
    filterStatus,
    loadingDeleteTask,
    setFilterStatus,
  } = useHome()

  return (
    <Styled.ContainerMaster>
      <Styled.ContainerMasterButton>
        <Styled.ContainerButton>
          <Button
            title="Criar Nova Tarefa"
            onClick={() => {
              handleModalAndSetTypeModal('CREATE')
            }}
          />
        </Styled.ContainerButton>
      </Styled.ContainerMasterButton>
      <Styled.ContainerMasterFilter>
        <Styled.ContainerFilter>
          <DropdownCustom
            options={itemDropdownFilter}
            defaultValue={filterStatus ?? ''}
            label="Status"
            placeholder="Todos"
            onChange={(v) => {
              const value = v === '' ? undefined : (v as TypeStatusTask)
              setFilterStatus(value)
            }}
          />
        </Styled.ContainerFilter>
      </Styled.ContainerMasterFilter>

      {loadingPage ? (
        <Styled.ContainerSpinner>
          <Spinner />
        </Styled.ContainerSpinner>
      ) : (
        <>
          <Table
            rowKey="uid"
            columns={tableTasks(
              (typeForm, idTask) =>
                handleModalAndSetTypeModal(typeForm, idTask),
              (idTask) => handleOpenModalDelete(idTask),
            )}
            dataSource={contentTable}
            pagination={false}
          />
          <ModalCreateTask
            typeForm={typeForm}
            openModal={openModalCreateTask}
            onClose={closeModal}
          />
          <ModalDeleteTask
            isLoading={loadingDeleteTask}
            openModal={openModalDeleteTask}
            onClickCancel={() => setOpenModalDeleteTask(false)}
            onClickConfirm={handleDeleteTask}
          />

          {hasExistPaginate && (
            <Styled.ContainerPaginate>
              <Pagination
                current={page}
                pageSize={7}
                total={totalItems}
                onChange={handlePageChange}
              />
            </Styled.ContainerPaginate>
          )}
        </>
      )}
    </Styled.ContainerMaster>
  )
}
