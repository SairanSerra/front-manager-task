import type { FieldsTask, TaskState } from '@/store/types'
import { create } from 'zustand'

const initialStateTaskSpecific = {
  description: '',
  name: '',
  status: 'PENDING',
  id: 0,
} as FieldsTask

export const useTaskStore = create<TaskState>((set) => ({
  taskSpecific: initialStateTaskSpecific,
  setTaskSpecific: (taskSpecific) => set({ taskSpecific }),
  setClearTaskSpecific: () => set({ taskSpecific: initialStateTaskSpecific }),
}))
