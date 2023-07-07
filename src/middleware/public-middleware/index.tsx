'use client'
import type { PublicMiddlewareProps } from '@/middlewares/types'
import { usePublicMiddleware } from '@/middlewares/hooks'

export function PublicMiddleware({ children }: PublicMiddlewareProps) {
  const { isAuthenticated } = usePublicMiddleware()
  return (
    <>
      {!isAuthenticated && children}
      {isAuthenticated && null}
    </>
  )
}
