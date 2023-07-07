import { ProtectedMiddleware } from '@/middleware/protected-middleware'
import type { ReactNode } from 'react'


export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      {children}
    </ProtectedMiddleware>
  )
}
