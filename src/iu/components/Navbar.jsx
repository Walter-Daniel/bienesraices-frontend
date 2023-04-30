import { Link } from "react-router-dom";
import React, { useState } from 'react';

import { Layout, Menu, Row, Col, Button, Drawer } from 'antd';
import { HomeOutlined, MenuUnfoldOutlined, FormOutlined, LoginOutlined } from '@ant-design/icons';
import { Sidebar } from "./Sidebar";


export const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const linksNavbar = [
    {
      key: '1',
      label: <Link to="/">Inicio</Link>,
      icon: <HomeOutlined />,

    },
    {
      key: '2',
      label: <Link to='/auth/login'>Inicia Sesión</Link>,
      icon: <LoginOutlined />,

    },
    {
      key: '3',
      label: <Link to='/auth/register'>Registrate</Link>,
      icon: <FormOutlined />,
    },
  ]

  

  const nodeRef = React.useRef(null);
   
  return (
    <Row className="navbar">
      <h1>Bienes<span>Raices</span></h1>
        <Col xs={0} sm={0} md={12}>
          <Menu
          theme="dark"
          mode="horizontal"
          ref={ nodeRef }
          items={linksNavbar}
          defaultSelectedKeys={['1']}
        />
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
