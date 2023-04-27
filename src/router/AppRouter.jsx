
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { PrincipalLayout } from '../iu/layout/PrincipalLayout';
import { Confirm, Login, Password, Register } from '../auth';
import { AuthRoutes } from '../auth/routes/AuthRoutes';


export const AppRouter = () => {

  const status = 'non-authenticated'

  return (
        <Routes>
          {/* {
            (status === 'authenticated') ? <Route path='/' />
                                         : 
          } */}
          <Route path='/' element={ <PrincipalLayout /> } />
          <Route path='/auth/*' element={<AuthRoutes />}/>
        </Routes>
  )

}