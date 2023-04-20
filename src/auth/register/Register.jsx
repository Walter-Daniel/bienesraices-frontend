import { Button, Checkbox, Col, Form, Input, notification, Row } from 'antd';
import { Link } from 'react-router-dom';

export const Register = () => {

  const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onFinish = (values) => {
    console.log('Success:', values);
    openNotification('Registro exitoso', 'Te enviaremos un mail de confirmación a tu correo', 'success')
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

  return (
    <>
      <div className="container-fluid">
          <Row justify="center" className="login-container">
            <Col xs={20} md={16} lg={10}>
              <h1>Real<span>Estate</span></h1>
                <h2>Crear Cuenta</h2>
              <div className="last-container">
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
                    name='fullName'
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
                    label="Confirm Password"
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
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Link to='/auth/login'>¿Ya tienes una cuenta? Inicia sesión</Link>
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
              </div>
            </Col>
          </Row>
      </div>
    </>
  )
}
