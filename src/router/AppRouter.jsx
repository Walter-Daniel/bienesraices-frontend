
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../auth/login/Login'
import { Register } from '../auth/register/Register'
import { PrincipalLayout } from '../iu/layout/PrincipalLayout';
import { Password } from '../auth/password/Password';

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <PrincipalLayout />,
    },
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/auth/register",
      element: <Register />,
    },
    {
      path: "/auth/recoverpassword",
      element: <Password />,
    },
]);