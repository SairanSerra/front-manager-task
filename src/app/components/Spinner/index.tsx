import React from 'react'

import { Spin, Space } from 'antd'
import { SpinSize } from 'antd/es/spin'

export function Spinner({ size = 'default' }: { size?: SpinSize }) {
  return (
    <Space size={size === 'default' ? 'large' : size}>
      <Spin size={size} />
    </Space>
  )
}
