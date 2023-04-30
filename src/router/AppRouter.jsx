
import { Route, Routes } from 'react-router-dom';
import { PrincipalLayout } from '../iu/layout/PrincipalLayout';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { RealEstateRoutes } from '../realEstate/routes/RealEstateRoutes';


export const AppRouter = () => {

  const status = 'authenticated'

  return (
        <Routes>
          {/* {
            (status === 'authenticated') ? <Route path='/*' element={<RealEstateRoutes />} /> 
                                         : <Route path='/auth/*' element={<AuthRoutes />}/>
                                   
          } */}
          {/* <Route path='/' element={ <PrincipalLayout /> } /> */}
          <Route path='/*' element={<RealEstateRoutes />} /> 
          
        </Routes>
  )

}