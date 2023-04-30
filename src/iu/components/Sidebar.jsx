import { Avatar, List } from 'antd';
import { HomeOutlined, MenuUnfoldOutlined, FormOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const data = [
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
export const Sidebar = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={item.icon}
          title={item.label}
        />
      </List.Item>
    )}
  />
);
