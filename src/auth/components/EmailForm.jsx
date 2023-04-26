import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const EmailForm = () => {
    const { resetPassword } = useAuthStore();
    const onFinish = ({email}) => {
      resetPassword(email);
    };
  return (
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
            offset: 0,
            span: 16,
        }}
        >
        <Link to='/auth/login'>Regresar a Inicio de Sesión</Link>
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
    )
}
