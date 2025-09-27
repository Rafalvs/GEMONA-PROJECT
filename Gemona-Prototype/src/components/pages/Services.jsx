import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react"; // Import useEffect
import { categories } from "../../config/mock-db";
import { useSearchParams } from 'react-router-dom'; // Import useSearchParams

export default function Services() {
    const [distance, setDistance] = useState(1);
    const [searchParams] = useSearchParams(); // Hook to access query parameters
    const [filteredServices, setFilteredServices] = useState(categories); // State for services to display

    // Get the search query from the URL
    const searchQuery = searchParams.get('q'); // Get the value of the 'q' parameter

    useEffect(() => {
        if (searchQuery) {
            // Filter categories based on the search query
            const lowerCaseQuery = searchQuery.toLowerCase();
            const results = categories.filter(service =>
                service.name.toLowerCase().includes(lowerCaseQuery) ||
                service.description.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredServices(results);
        } else {
            // If no search query, display all categories
            setFilteredServices(categories);
        }
    }, [searchQuery]); // Re-run this effect whenever the searchQuery changes

    return (
        <>
            <Header />
            <main className="services-layout">
                <aside className="filters">
                    <section className="filter-section">
                        <h3>Preços</h3>
                        <div>
                            <input type="checkbox" id="menor-preco" />
                            <label htmlFor="menor-preco">Menor Preço</label>
                            <input type="checkbox" id="maior-preco" className="ml-1" />
                            <label htmlFor="maior-preco" className="ml-1">Maior Preço</label>
                        </div>
                    </section>

                    <section className="filter-section">
                        <h3>Avaliação</h3>
                        <div>
                            <input type="checkbox" id="mais-avaliados" />
                            <label htmlFor="mais-avaliados">Mais bem avaliados</label>
                        </div>
                    </section>

                    <section className="filter-section">
                        <h3>Distância</h3>
                        <div>
                            <span>Distância: {distance} km</span>
                            <input type="range" min={1} max={20} value={distance} onChange={e => setDistance(e.target.value)} className="ml-1" />
                        </div>
                    </section>

                    <section className="filter-section">
                        <h3>Novos Serviços</h3>
                        <div>
                            <input type="checkbox" id="novos-servicos" />
                            <label htmlFor="novos-servicos">Novos Serviços</label>
                        </div>
                    </section>

                    <section className="filter-section">
                        <h3>Horário</h3>
                        <div className="weekdays">

                            <input type="checkbox" id="domingo" />

                            <label htmlFor="domingo">Domingo</label>

                            <input type="checkbox" id="segunda" className="ml-05" />

                            <label htmlFor="segunda" className="ml-05">Segunda</label>

                            <input type="checkbox" id="terca" className="ml-05" />

                            <label htmlFor="terca" className="ml-05">Terça</label>

                            <input type="checkbox" id="quarta" className="ml-05" />

                            <label htmlFor="quarta" className="ml-05">Quarta</label>

                            <input type="checkbox" id="quinta" className="ml-05" />

                            <label htmlFor="quinta" className="ml-05">Quinta</label>

                            <input type="checkbox" id="sexta" className="ml-05" />

                            <label htmlFor="sexta" className="ml-05">Sexta</label>

                            <input type="checkbox" id="sabado" className="ml-05" />

                            <label htmlFor="sabado" className="ml-05">Sábado</label>
                        </div>
                        <div className="shifts">

                            <input type="checkbox" id="manha" />

                            <label htmlFor="manha">Manhã</label>

                            <input type="checkbox" id="tarde" className="ml-05" />

                            <label htmlFor="tarde" className="ml-05">Tarde</label>

                            <input type="checkbox" id="noite" className="ml-05" />

                            <label htmlFor="noite" className="ml-05">Noite</label>
                        </div>
                    </section>
                </aside>
                <section className="services-grid">
                    {/* Render filteredServices instead of categories */}
                    {filteredServices.length > 0 ? (
                        filteredServices.map((categorie, i) => (
                            <div key={i} className="service-box">
                                <div className="row">
                                    <categorie.icon /> {/* Assuming categorie.icon is a component */}
                                    <h4>{categorie.name}</h4>
                                </div>
                                <p>{categorie.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum serviço encontrado para "{searchQuery}"</p>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}