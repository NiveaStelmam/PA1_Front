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
                <Link to={`/CadastrarUser`} className="ccd-btn ">Cadastrar Usuário</Link>
            </li>
            <li>
                <Link to={`/pratos`} className="ccd-btn ">Cadastrar Prato</Link>
            </li>
            <li>
                <Link to={`/avisos`} className="ccd-btn ">Cadastrar Avisos</Link>
            </li>
            <li>
                <Link to={`/cardapiosemanal`} className="ccd-btn " >
                    Cadastrar Cardápio Semanal
                </Link>
            </li>
            <li>
                <Link to={`/sugestoes`} className="ccd-btn ">Cadastrar Sugestão</Link>
            </li>
            <li>
                <Link to={`/avaliacoes`} className="ccd-btn ">Avaliações</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar