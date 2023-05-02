import { ConfigProvider, theme } from 'antd';

export const DarkTheme = ({ children }) => {
  return (
    <ConfigProvider 
        theme={{
            token:{
                colorPrimary: "#4ec5c1",
                
            },
            algorithm: theme.darkAlgorithm
        }}
    >
        {children}
    </ConfigProvider>
     
  )
}
