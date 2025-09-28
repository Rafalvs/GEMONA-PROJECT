import Layout from "../components/layout/Layout"
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { categories, mostSearchedServices } from "../utils/mock-home"

export default function Home(){
    return(
        <Layout>
            <main id="home">
                <h2>Está buscando um serviço? Entenda como nossa plataforma funciona:</h2>
                <p>Faça uma busca ou clique em uma das categorias abaixo, selecione o serviço desejado e entre em contato diretamente com o prestador.</p>
                <h2>Categorias</h2>
                <ul className="category-list">
                    {categories.map((category) => (
                        <Link to="/services" key={category.name}>
                            <li>
                                <category.icon />
                                {category.name}
                            </li>
                        </Link>
                    ))}
                </ul>
                <h2>Serviços mais buscados</h2>
                <ul className="category-list">
                    {mostSearchedServices.map((service) => (
                        <Link to="/services" key={service.name}>
                            <li>
                                <service.icon />
                                {service.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </main>
        </Layout>
    )
}