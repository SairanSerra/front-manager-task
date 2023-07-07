import { PublicMiddleware } from '@/middleware/public-middleware'
import type { ReactNode } from 'react'


export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicMiddleware>{children}</PublicMiddleware>
}
