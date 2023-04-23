import { Button, Checkbox, Col, Form, Input, notification, Row } from 'antd';
import { Link } from 'react-router-dom';
import { LayoutPrincipal } from '../components/LayoutPrincipal';

export const Password = () => {


  const onFinish = (values) => {
    console.log('Success:', values);
    openNotification('Te hemos enviado un correo', 'Por favor, revisa tu email y sigue los pasos', 'success')
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    openNotification('Login incorrecto', 'Asegurese de colocar de manera correcta sus datos', 'error')
  };

  const openNotification = (message, description, type) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'top'
    });
  };

  const title = 'Recuperar Contraseña'

  return (
    <>
      <LayoutPrincipal title={title} >
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Link to='/auth/login'>Regresar a Inicio de Sesión</Link>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
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
