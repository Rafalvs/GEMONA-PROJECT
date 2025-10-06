import { Link } from 'react-router-dom';

import Header from "../Header"
import Footer from "../Footer"

export default function Login(){
    return(
        <>
            <Header />
                <main className='bg-[#07284b]'>
                    <form className="form-center">
                        <div className="form-group">
                            <label htmlFor="userInput">Usuário</label>
                            <input name="userInput" id="userInput" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput">Senha</label>
                            <input name="passwordInput" id="passwordInput" type="password" />
                        </div>
                        <Link to="/"><button>Entrar</button></Link>
                        <button>Esqueceu a senha?</button>
                        <Link to="/register"><button>Cadastre-se</button></Link>
                    </form>
                </main>
            <Footer />
        </>
    )
}