
import { LayoutPrincipal } from '../components/LayoutPrincipal';
import { EmailForm, FormPassword, PasswordConfirm } from '../components';
import { useAuthStore } from '../../hooks';

export const Password = () => {

  const pathdivider = window.location.pathname.split('/');
  const token = pathdivider[pathdivider.length -1];
  console.log(token)
  const { resetPassword } = useAuthStore();
  const title = 'Recuperar Contraseña';

  return (
    <>
      <LayoutPrincipal title={title} >
        {
          (!token) ? <EmailForm /> :
                                    (/*!message*/ title === 'Recuperar Contraseña' ) ? <FormPassword /> : <PasswordConfirm />
        }
      </LayoutPrincipal>
    </>
  )
}
