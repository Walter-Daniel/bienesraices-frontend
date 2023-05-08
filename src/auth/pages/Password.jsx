
import { LayoutPrincipal } from '../components/LayoutPrincipal';
import { EmailForm, FormPassword, PasswordConfirm } from '../components';
import { useAuthStore } from '../../hooks';

export const Password = () => {

  const pathdivider = window.location.pathname.split('/');
  const token = pathdivider[pathdivider.length -1];
  const { checkTokenPassword, message } = useAuthStore();
  const title = 'Recuperar Contraseña';
  if( token !== 'recover-password' ) checkTokenPassword(token)

  return (
    <>
      <LayoutPrincipal title={title} >
        {
          (token === 'recover-password') ? <EmailForm /> :
                    ( message === 'Por favor, ingresar la nueva contraseña' ) ? <FormPassword token={token}/> : <PasswordConfirm message={message} />
        }
      </LayoutPrincipal>
    </>
  )
};
  