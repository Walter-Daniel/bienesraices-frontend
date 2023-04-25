import { Space, Typography } from 'antd';
const { Text, Link } = Typography;

import { LayoutPrincipal } from '../components/LayoutPrincipal';
import { useAuthStore } from '../../hooks/useAuthStore';


export const Confirm = () => {
    const title = 'Confirmar cuenta';
    const pathdivider = window.location.pathname.split('/');
    const token = pathdivider[pathdivider.length -1];
    const { confirmEmail, message } = useAuthStore();
    confirmEmail(token)
  return (
    <>
        <LayoutPrincipal title={title}>
          <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
            {
              ( (!message ) || message !== 'El usuario ha sido confirmado' 
                              ? <Text>Hubo un error al activar la cuenta</Text>
                              : <Text>Su cuenta ha sido activada</Text>
              )
            }         
          </Space>
        </LayoutPrincipal>
    </>
  )
}
