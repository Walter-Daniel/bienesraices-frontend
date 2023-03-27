import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SmileOutlined, DownOutlined } from '@ant-design/icons';

import { Alert, Dropdown, Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;

import React from 'react'


export const App = () => {
  return (
    <Layout>
      <Header >Header</Header>
      <Content >Content</Content>
      <Footer >Footer</Footer>
    </Layout>
  )
}


export default App
