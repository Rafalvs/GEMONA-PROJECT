import { Link } from 'react-router-dom';

import Layout from '../../components/layout/Layout';

export default function Login(){
    return(
        <Layout>
            <main>
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
            </Layout>
    )
}