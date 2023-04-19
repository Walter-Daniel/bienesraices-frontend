
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../auth/login/Login'
import { Register } from '../auth/register/Register'

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    
    //   children: [
    //     {
    //       path: "team",
    //       element: <Team />,
  
    //     },
    //   ],
    },
]);