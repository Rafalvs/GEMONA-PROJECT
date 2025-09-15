import Header from "../Header"
import Footer from "../Footer"

export default function Register(){
    return(
        <>
            <Header />
                <main>
                    <form>
                        <label htmlFor="nameInput">Nome</label> <br />
                        <input name="nameInput" id="nameInput" type="text" /> <br />

                        <label htmlFor="emailInput">E-mail</label> <br />
                        <input name="emailInput" id="emailInput" type="text" /> <br />

                        <label htmlFor="passwordInput">Senha</label> <br />
                        <input name="passwordInput" id="passwordInput" type="password" /> <br />

                        <label htmlFor="cpfInput">CPF</label> <br />
                        <input name="cpfInput" id="cpfInput" type="number" /> <br />

                        <label htmlFor="enderecoInput">CEP</label> <br />
                        <input name="enderecoInput" id="enderecoInput" type="number" /> <br />
                        

                        <input name="pfInput" id="pfInput" type="checkbox" />
                        <label htmlFor="pfInput">Pessoa Física</label> <br />
                        <input name="pjInput" id="pjInput" type="checkbox" />
                        <label htmlFor="pjInput">Pessoa Jurídica</label> <br />

                        <button>Cadastrar</button> <br />
                        <button>Entrar</button> <br />
                    </form>
                </main>
            <Footer />
        </>
    )
}