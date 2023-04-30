import { Link } from "react-router-dom";
import { useState } from 'react';

import { Layout, Menu, Row, Col, Button, Drawer } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Sidebar } from "./Sidebar";


export const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
   
  return (
    // <nav>
    //     <Link to="/">Inicio</Link>
    //     <Link to='/auth/login'>Inicia Sesión</Link>
    //     <Link to='/auth/register'>Registrate</Link>
        
    // </nav>
    <Row>
        <Col xs={0} sm={0} md={12}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
                <Link to='/auth/login'>Inicia Sesión</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
                <Link to='/auth/register'>Registrate</Link>
            </Menu.Item>
          </Menu>
        </Col> 
        <div className="mobile-responsive">
          <Button type="primary" className='btn-second' onClick={showDrawer}>
            <MenuUnfoldOutlined />
          </Button>
        </div>
        <Drawer title="Menú" placement="left" onClose={onClose} open={visible} >
              <Sidebar />
        </Drawer>
    </Row>
  )
}
