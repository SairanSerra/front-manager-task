import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { IResponseLogin } from '@/services/types'
import { AuthState } from '@/store/types/Auth'

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      user: {
       email: '',
       name: '',
       phone: 0,
       token: ''
      },
      setUserState: (data) => set({user: data}),
      setLoggout: () => set({user:{email: '', name: '',phone: 0, token: ''}})
    }),

    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
