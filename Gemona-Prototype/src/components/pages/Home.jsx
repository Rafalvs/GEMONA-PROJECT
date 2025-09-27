import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import { categories, mostSearchedServices } from "../../config/mock-db"

export default function HomePage() {
    return (
        <>
            <Header />
            <main id="home">
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
            <Footer />
        </>
    )
}