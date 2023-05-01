import React, { useState } from 'react';

import { Menu, Row, Col, Button, Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Sidebar } from "./Sidebar";
import { userLinks, publicLinks } from '../../realEstate/helpers/LinksNavbar';


export const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const nodeRef = React.useRef(null);
   
  return (
    <Row className="navbar">
      <h1>Bienes<span>Raices</span></h1>
        <Col xs={0} sm={0} md={12}>
          <Menu
            mode="horizontal"
            ref={ nodeRef }
            items={ userLinks }
            className="container-menu"
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
