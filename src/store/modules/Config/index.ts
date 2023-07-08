import { ConfigState } from '@/store/types'
import { create } from 'zustand'

export const useConfigStore = create<ConfigState>((set) => ({
  contextHolder: null,
  setContextHolder: (element) => set({ contextHolder: element }),
}))
