import Header from "../Header"
import Footer from "../Footer"

export default function Profile(){
    return(
        <>
            <Header />
                <main className="bg-[#07284b]">
                   <img id="profilePic"></img>
                   <p id="username">Nome do Usuário</p>

                </main>
            <Footer />
        </>
    )
}