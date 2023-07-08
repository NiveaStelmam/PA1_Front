import { Link } from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>RU EAJ</Link>
            
        </h2>

        <ul>
            <li>
                <Link to={`/LoginPage`}>Página de Login</Link>
            </li>
            <li>
                <Link to={`/CadastrarUser`}>Cadastrar Usuário</Link>
            </li>
            <li>
                <Link to={`/CadastrarCardapioDiario`} className="ccd-btn">
                    Cadastrar Cardápio Diário
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar