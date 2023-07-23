'use client'
import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  AuditOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button } from 'antd'
import type { PropsLayout } from './types'

import { useLayout } from './hooks'

const { Header, Sider, Content } = Layout

const LayoutProvider: React.FC<PropsLayout> = ({ children }) => {
  const {
    collapsed,
    colorBgContainer,
    push,
    setCollapsed,
    setTitle,
    title,
    handleLoggout,
  } = useLayout()

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider
        trigger={null}
        collapsed={collapsed}
        style={{
          height: '100vh',
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <AuditOutlined />,
              label: 'Tarefas',
              onClick: () => setTitle('Tarefas'),
            },
            {
              key: '2',
              icon: <PoweroffOutlined />,
              label: 'Sair',
              onClick: () => handleLoggout(),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <h1>{title}</h1>
          <h1></h1>
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            height: 'auto',
            overflow: 'auto',
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutProvider
