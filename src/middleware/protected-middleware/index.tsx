'use client'

import { useProtectedMiddleware } from "../hooks"
import type { ProtectedMiddlewareProps } from "../types"

export function ProtectedMiddleware({ children }: ProtectedMiddlewareProps) {
  const { isAuthenticated } = useProtectedMiddleware()
  return (
    <>
      {isAuthenticated && children}
      {!isAuthenticated && null}
    </>
  )
}
