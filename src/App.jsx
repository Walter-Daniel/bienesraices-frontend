import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import React from 'react'
import { AppRouter } from './router';
import { Navbar } from './iu/components/Navbar';


export const App = () => {
  return (
    <Layout>
      <Header >
        <Navbar />
      </Header>
      <Content >
        <AppRouter />
      </Content>
      <Footer >Footer</Footer>
    </Layout>
  )
}


export default App
