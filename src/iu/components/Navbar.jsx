import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to='/auth/login'>Login</Link>
        <Link to='/auth/register'>Registro</Link>
    </nav>
  )
}
