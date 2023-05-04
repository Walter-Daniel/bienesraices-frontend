import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';
import { LayoutPrincipal } from '../components/LayoutPrincipal'

export const Register = () => {

  const { startRegister } = useAuthStore();

  const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onFinish = ({ name, email, password }) => {
    startRegister(name, email, password);
  };

  const title = 'Crear una Cuenta';

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
          autoComplete="on"
          layout="vertical"
        >
            <Form.Item
            name='name'
            label="Nombre completo"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
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
            name="confirm"
            label="Confirmar contraseña"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Por favor, confirma tu contraseña',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Las contraseñas no coinciden'));
                },
              }),
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
            <Link to='/auth/login'>¿Ya tienes una cuenta? Inicia sesión</Link>
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
};
