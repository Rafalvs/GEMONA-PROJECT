import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

export default function Home(){
    return(
        <>
            <Header />
                <main id="home">
                    <h2>Está buscando um serviço? Entenda como nossa plataforma funciona:</h2>
                    <p>Faça uma busca ou clique em uma das categorias abaixo, selecione o serviço desejado e entre em contato diretamente com o prestador.</p>
                    <h2>Categorias</h2>
                    // Placeholder para categorias
                    <h2>Serviços mais buscados</h2>
                    // Placeholder para serviços mais buscados
                </main>
            <Footer />
        </>
    )
}