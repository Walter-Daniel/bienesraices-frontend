import { Link } from 'react-router-dom';
import { Space, Typography } from 'antd';
const { Text } = Typography;

export const PasswordConfirm = ( message ) => {
  return (
    <>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {!message || message !== "El usuario ha sido confirmado" ? (
          <Text>Hubo un error al activar la cuenta</Text>
        ) : (
          <>
            <Text>Su cuenta ha sido activada.</Text>
            <Link to="/auth/login">Inicia sesión</Link>
          </>
        )}
      </Space>
    </>
  );
}
