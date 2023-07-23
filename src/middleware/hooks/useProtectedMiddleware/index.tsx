'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Routes } from '@/constants'
import { checkUserIsAuthenticated } from '@/functions'
import { useAuthStore } from '@/store'

export function useProtectedMiddleware() {
  const { token } = useAuthStore.getState().user
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    const userAuthenticated = checkUserIsAuthenticated(token)
    if (!userAuthenticated) {
      push(Routes.public.login)
    }

    setIsAuthenticated(userAuthenticated)
  }, [push, token])

  return {
    isAuthenticated,
  }
}
