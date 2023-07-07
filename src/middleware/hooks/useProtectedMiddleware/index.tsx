'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Routes } from '@/constants'
import { checkUserIsAuthenticated } from '@/functions'

export function useProtectedMiddleware() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { push } = useRouter()

  const userAuthenticated = checkUserIsAuthenticated()
  useEffect(() => {
    if (!userAuthenticated) {
      push(Routes.public.login)
    }

    setIsAuthenticated(userAuthenticated)
  }, [userAuthenticated, push])

  return {
    isAuthenticated,
  }
}
