/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import React from 'react'
import type { LayoutProviderProps } from '@/providers/types'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from 'axios'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import { useServerInsertedHTML } from 'next/navigation'
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
  const cache = React.useMemo<Entity>(() => createCache(), [])
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ))
  return (
    <QueryClientProvider client={queryClient}>
      {enabledDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </QueryClientProvider>
  )
}
