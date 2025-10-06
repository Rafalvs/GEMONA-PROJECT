import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"

export default function Register(){
    return(
        <>
            <Header />
                <main className="bg-[#07284b]">
                    <form className="form-center">
                        <div className="form-group">
                            <label htmlFor="nameInput">Nome</label>
                            <input name="nameInput" id="nameInput" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">E-mail</label>
                            <input name="emailInput" id="emailInput" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput">Senha</label>
                            <input name="passwordInput" id="passwordInput" type="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpfInput">CPF</label>
                            <input name="cpfInput" id="cpfInput" type="number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="enderecoInput">CEP</label>
                            <input name="enderecoInput" id="enderecoInput" type="number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pfInput">
                            <input name="pfInput" id="pfInput" type="checkbox" />
                            Pessoa Física</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pjInput">
                            <input name="pjInput" id="pjInput" type="checkbox" />
                            Pessoa Jurídica</label>
                        </div>
                        <button>Cadastrar</button>
                        <Link to="/Login"><button>Entrar</button></Link>
                    </form>
                </main>
            <Footer />
        </>
    )
}