import Header from "../Header"
import Footer from "../Footer"

export default function Profile(){
    return(
        <>
            <Header />
                <main>
                   <img id="profilePic"></img>
                   <p id="username">Nome do Usuário</p>

                </main>
            <Footer />
        </>
    )
}