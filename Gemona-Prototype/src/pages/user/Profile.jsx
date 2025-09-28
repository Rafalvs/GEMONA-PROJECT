import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

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