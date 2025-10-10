import Layout from "../components/layout/Layout"
import APIfetch from "../utils/APIfetch"

export default function Home(){

    const epCategorias = "http://localhost:3000/categorias"; //endpoint categorias
    const epServicos = "http://localhost:3000/servicosMaisProcurados"; // endpoint serviços mais buscados

    return(
        <Layout>
            <main id="home">
                <h3>Está buscando um serviço? Entenda como nossa plataforma funciona:</h3>
                <p>Faça uma busca ou clique em uma das categorias abaixo, selecione o serviço desejado e entre em contato diretamente com o prestador.</p>
                <h3>Categorias</h3>
                <APIfetch endpoint={epCategorias}/>
                <h3>Serviços mais buscados</h3>
                <APIfetch endpoint={epServicos}/>
            </main>
        </Layout>
    )
}