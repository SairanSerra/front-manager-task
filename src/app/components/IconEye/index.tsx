import React from 'react'
import type { PropsEyeCloseAndOpen } from './types'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

export function IconEyeOpenOrClose({
  open,
  size = 21,
  onClick,
}: PropsEyeCloseAndOpen) {
  return open ? (
    <AiOutlineEye size={size} color="#727280" onClick={onClick} />
  ) : (
    <AiOutlineEyeInvisible size={size} color="#727280" onClick={onClick} />
  )
}
