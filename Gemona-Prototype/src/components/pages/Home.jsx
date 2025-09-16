import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <Header />
                <main id="home">
                    <h2>Categorias</h2>
                    <ul className="category-list">
                        <li><Link to="/services">Alimentício</Link></li>
                        <li><Link to="/services">Assistência Técnica</Link></li>
                        <li><Link to="/services">Reparos e Reformas</Link></li>
                        <li><Link to="/services">Saúde</Link></li>
                        <li><Link to="/services">Veículos</Link></li>
                        <li><Link to="/services">Educação</Link></li>
                        <li><Link to="/services">Serviços Domésticos</Link></li>
                        <li><Link to="/services">Eventos</Link></li>
                        <li><Link to="/services">Moda e Beleza</Link></li>
                        <li><Link to="/services">Consultoria</Link></li>
                        <li><Link to="/services">Design</Link></li>
                        <li><Link to="/services">Tecnologia</Link></li>
                        <li><Link to="/services">Segurança</Link></li>
                    </ul>
                    <h2>Serviços mais buscados</h2>
                    <ul className="category-list">
                        <li><Link to="/services">Encanador</Link></li>
                        <li><Link to="/services">Marceneiro</Link></li>
                        <li><Link to="/services">Cozinheiro</Link></li>
                        <li><Link to="/services">Manicure e Pedicure</Link></li>
                        <li><Link to="/services">Mecânico</Link></li>
                        <li><Link to="/services">Desentupidor</Link></li>
                        <li><Link to="/services">Diarista</Link></li>
                        <li><Link to="/services">Babá</Link></li>
                        <li><Link to="/services">Motorista</Link></li>
                        <li><Link to="/services">Cabeleireiro</Link></li>
                        <li><Link to="/services">Psicólogo</Link></li>
                        <li><Link to="/services">Desenvolvedor</Link></li>
                        <li><Link to="/services">Cabeleireiro</Link></li>
                        <li><Link to="/services">Dedetizador</Link></li>
                        <li><Link to="/services">Nutricionista</Link></li>
                        <li><Link to="/services">Contador</Link></li>
                        <li><Link to="/services">Jardinagem</Link></li>
                        <li><Link to="/services">Alfaite</Link></li>
                        <li><Link to="/services">Arquiteto</Link></li>
                    </ul>
                </main>
            <Footer />
        </>
    )
}