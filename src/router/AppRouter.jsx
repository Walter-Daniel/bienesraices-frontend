
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../auth/login/Login'
import { Register } from '../auth/register/Register'
import { PrincipalLayout } from '../iu/layout/PrincipalLayout';

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <PrincipalLayout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
]);