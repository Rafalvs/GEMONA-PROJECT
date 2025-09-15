import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'

export default function Header(){
    return(
        <>
        <header>
            <img id="logo" src={logo} alt="Logo" />
            <Link to="./login"><button>Entrar</button></Link>
            <input type="text" placeholder="Busca"></input>
            <Link to="./register"><button>Cadastro</button></Link>
        </header>
        </>
    )
}

export function HomeBtn(){
    return(
        <>
            <button><Link to="/"></Link>Home</button>
        </>
    )
}