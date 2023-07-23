import { ProtectedMiddleware } from '@/middleware/protected-middleware'
import type { ReactNode } from 'react'
import LayoutProvider from '../components/Layout'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedMiddleware>
      <LayoutProvider>{children}</LayoutProvider>
    </ProtectedMiddleware>
  )
}
