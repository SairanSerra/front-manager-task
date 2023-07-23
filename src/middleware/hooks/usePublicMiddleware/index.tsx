'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { checkUserIsAuthenticated } from '@/functions/index'
import { Routes } from '@/constants/index'
import { useAuthStore } from '@/store'

export function usePublicMiddleware() {
  const { token } = useAuthStore.getState().user
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    const userAuthenticated = checkUserIsAuthenticated(token)

    if (userAuthenticated) {
      push(Routes.private.home)
    }

    setIsAuthenticated(userAuthenticated)
  }, [push, token])

  return {
    isAuthenticated,
  }
}
