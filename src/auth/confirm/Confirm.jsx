import { Space, Typography } from 'antd';
const { Text, Link } = Typography;

import { LayoutPrincipal } from '../components/LayoutPrincipal';


export const Confirm = () => {
    const title = 'Confirmar cuenta';
    const pathdivider = window.location.pathname.split('/');
    const path = pathdivider[pathdivider.length -1];
    console.log(path, 'Hola desde el confirm')
  return (
    <>
        <LayoutPrincipal title={title}>
            <Text>Hemos enviado un Email de confirmación, por favor haz click en el enlace</Text>
        </LayoutPrincipal>
    </>
  )
}
