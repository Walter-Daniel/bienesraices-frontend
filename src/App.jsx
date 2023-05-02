import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import { AppRouter } from './router';
import { Navbar } from './iu/components';
import { DarkTheme } from './theme/darkTheme';

export const App = () => {
  return (
    <DarkTheme>
      <Layout>
        <Header style={{ background:'rgb(38, 41, 43)' }}>
          <Navbar />
        </Header>
        <Content style={{ background:'#0E0B16', color:'#ffffff'}}>
          <AppRouter />
        </Content>
        <Footer >Footer</Footer>
      </Layout>
    </DarkTheme>
  )
}

export default App
