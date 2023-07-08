import { JSXElementConstructor, ReactElement } from 'react'

type ContextHolder = ReactElement<any, string | JSXElementConstructor<any>>

export interface ConfigState {
  contextHolder: ContextHolder | null
  setContextHolder: (element: ContextHolder) => void
}
