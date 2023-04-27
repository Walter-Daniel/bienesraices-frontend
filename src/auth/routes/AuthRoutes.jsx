import { Route, Routes } from "react-router-dom"
import { Login, Password, Register } from "../pages"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />} />
        <Route path="recover-password" element={ <Password/> } />
    </Routes>
  )
}
