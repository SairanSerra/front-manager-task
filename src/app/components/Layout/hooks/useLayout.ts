'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { authService } from '@/services/http'
import { useAuthStore } from '@/store'
import { useMutation } from '@tanstack/react-query'
import { theme } from 'antd'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [title, setTitle] = useState('Tarefas')
  const { push } = useRouter()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const { mutate, isLoading } = useMutation(['loggout'], () =>
    authService.loggout(),
  )
  const { setLoggout } = useAuthStore()

  useEffect(() => {
    const isInvalidateToken = isLoading
    if (isInvalidateToken) {
      setLoggout()
      push('/')
    }
  }, [isLoading])

  const handleLoggout = () => {
    mutate()
  }

  return {
    collapsed,
    setCollapsed,
    title,
    setTitle,
    push,
    colorBgContainer,
    handleLoggout,
  }
}
