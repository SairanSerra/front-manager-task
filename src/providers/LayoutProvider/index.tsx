/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import type { LayoutProviderProps } from '@/providers/types'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from 'axios'
import 'antd/dist/reset.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const errorFormat = error as AxiosError
        const statusCode = errorFormat.response?.status
        const retry = statusCode! > 499
        return retry
      },
    },
  },
})

export function LayoutProvider({ children }: LayoutProviderProps) {
  const enabledDevTools = process.env.NEXT_PUBLIC_MODE === 'development'

  return (
    <QueryClientProvider client={queryClient}>
      {enabledDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  )
}
