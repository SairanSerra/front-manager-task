'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { checkUserIsAuthenticated } from '@/functions/index'
import { Routes } from '@/constants/index'

export function usePublicMiddleware() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { push } = useRouter()

  const userAuthenticated = checkUserIsAuthenticated()
  useEffect(() => {
    if (userAuthenticated) {
      push(Routes.private.home)
    }

    setIsAuthenticated(userAuthenticated)
  }, [userAuthenticated, push])

  return {
    isAuthenticated,
  }
}
