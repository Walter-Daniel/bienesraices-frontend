import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SmileOutlined, DownOutlined } from '@ant-design/icons';

import { Alert, Dropdown, Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;

import React from 'react'
import { AppRouter } from './router';


export const App = () => {
  return (
    <Layout>
      <Header ><h1>Bienes Raices</h1></Header>
      <Content >
        <AppRouter />
      </Content>
      <Footer >Footer</Footer>
    </Layout>
  )
}


export default App
