import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import {
    Utensils,
    Wrench,
    Hammer,
    HeartPulse,
    Car,
    Book,
    Home,
    Calendar,
    Shirt,
    Briefcase,
    Palette,
    Monitor,
    Shield,
    Droplets,
    TreeDeciduous,
    SprayCan,
    Baby,
    CarFront,
    Scissors,
    Brain,
    Code,
    Bug,
    Salad,
    Calculator,
    Flower,
    Building,
    UserRoundCog,
    ChefHat,
} from "lucide-react"

const categories = [
    { name: "Alimentício", icon: Utensils },
    { name: "Assistência Técnica", icon: Wrench },
    { name: "Reparos e Reformas", icon: Hammer },
    { name: "Saúde", icon: HeartPulse },
    { name: "Veículos", icon: Car },
    { name: "Educação", icon: Book },
    { name: "Serviços Domésticos", icon: Home },
    { name: "Eventos", icon: Calendar },
    { name: "Moda e Beleza", icon: Shirt },
    { name: "Consultoria", icon: Briefcase },
    { name: "Design", icon: Palette },
    { name: "Tecnologia", icon: Monitor },
    { name: "Segurança", icon: Shield },
]

const mostSearchedServices = [
    { name: "Encanador", icon: Droplets },
    { name: "Marceneiro", icon: TreeDeciduous },
    { name: "Cozinheiro", icon: ChefHat },
    { name: "Manicure e Pedicure", icon: SprayCan },
    { name: "Mecânico", icon: UserRoundCog },
    { name: "Desentupidor", icon: Hammer },
    { name: "Diarista", icon: Home },
    { name: "Babá", icon: Baby },
    { name: "Motorista", icon: CarFront },
    { name: "Cabeleireiro", icon: Scissors },
    { name: "Psicólogo", icon: Brain },
    { name: "Desenvolvedor", icon: Code },
    { name: "Cabeleireiro", icon: Scissors },
    { name: "Dedetizador", icon: Bug },
    { name: "Nutricionista", icon: Salad },
    { name: "Contador", icon: Calculator },
    { name: "Jardinagem", icon: Flower },
    { name: "Alfaite", icon: Shirt },
    { name: "Arquiteto", icon: Building },
]

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