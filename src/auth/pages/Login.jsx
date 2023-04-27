import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';
import { LayoutPrincipal } from '../components/LayoutPrincipal';
import { openNotification } from '../../helpers/openNotification';

export const Login = () => {

  const { startLogin } = useAuthStore();

  const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onFinish = ({ email, password }) => {
    openNotification('Bienvenido', 'Te damos la bienvenida NOMBRE', 'success');
    startLogin( email, password );
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    openNotification('Login incorrecto', 'Asegurese de colocar de manera correcta sus datos', 'error')
  };
  
  const title = 'Iniciar Sesión';

  return (
    <>
      <LayoutPrincipal title={title}>
        <Form
          name="basic"
          className="form-container"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
        >
          <Form.Item
            label="Correo"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Por favor ingrese su correo!",
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su contraseña!",
              },
              {
                min: 6,
                max: 12,
                pattern: passwordPattern,
                message:
                  "La contraseña debe contener: entre 6 y 12 caracteres y por lo menos una letra mayúscula, una minúscula, un número y un carácter especial(@$!%*?&).",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Link to='/auth/register'>¿No tienes una cuenta?. Registrate</Link>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Link to='/auth/recoverpassword'>¿Te olvidaste la contraseña?</Link>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </LayoutPrincipal>
    </>
  )
}
