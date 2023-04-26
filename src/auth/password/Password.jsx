
import { LayoutPrincipal } from '../components/LayoutPrincipal';
import { EmailForm, FormPassword, PasswordConfirm } from '../components';
import { useAuthStore } from '../../hooks';

export const Password = () => {

  const pathdivider = window.location.pathname.split('/');
  const token = pathdivider[pathdivider.length -1];
  console.log(token)
  const { checkTokenPassword, message } = useAuthStore();
  checkTokenPassword(token)
  const title = 'Recuperar Contraseña';

  return (
    <>
      <LayoutPrincipal title={title} >
        {
          (!message) ? <EmailForm /> :
                  ( message === 'Por favor, ingresar la nueva contraseña' ) ? <FormPassword token={token}/> : <PasswordConfirm message={message} />
        }
      </LayoutPrincipal>
    </>
  )
}
  