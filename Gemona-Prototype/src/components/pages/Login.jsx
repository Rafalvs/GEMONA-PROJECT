import { Link } from 'react-router-dom';

import Header from "../Header"
import Footer from "../Footer"

export default function Login(){
    return(
        <>
            <Header />
                <main>
                    <form>
                        <label htmlFor="userInput">Usuário</label> <br />
                        <input name="userInput" id="userInput" type="text" /> <br />
                        <label htmlFor="userInput">Senha</label> <br />
                        <input name="passwordInput" id="userInput" type="password" /> <br />

                        <button><Link to="/">Entrar</Link></button> <br />
                        <button>Esqueceu a senha?</button> <br />
                        <button><Link to="../register">Cadastre-se</Link></button>
                    </form>
                </main>
            <Footer />
        </>
    )
}