import { Link } from 'react-router-dom';
import { Space, Typography } from 'antd';
const { Text } = Typography;

export const PasswordConfirm = ( ) => {
  return (
    <>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {
          <>
            <Text>Su contraseña ha sido cambiada.</Text>
            <Link to="/auth/login">Inicie sesión</Link>
          </>
        }
      </Space>
    </>
  );
};
