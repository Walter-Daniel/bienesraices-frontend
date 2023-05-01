import { Link } from "react-router-dom";
import { HomeOutlined, FormOutlined, LoginOutlined, LogoutOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';


export const publicLinks = [
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
  
 export const userLinks = [
    {
      key: '111',
      label: <Link to="/administration">Mis Propiedades</Link>,
      icon: <DatabaseOutlined />,

    },
    {
      key: '112',
      label: <Link to='/auth/administration'>Mi Perfil</Link>,
      icon: <UserOutlined />,

    },
    {
      key: '113',
      label: <Link to='/auth/login'>Cerrar Sesión</Link>,
      icon: <LogoutOutlined />,
    },
  ]