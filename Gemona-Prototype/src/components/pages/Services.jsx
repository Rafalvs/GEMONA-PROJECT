import Header from "../Header"
import Footer from "../Footer"
import { useState } from "react";

export default function Services(){
    const [distance, setDistance] = useState(1);
    return(
        <>
            <Header />
            <main className="filters">
                <section className="filter-section">
                    <h3>Preços</h3>
                    <div>
                        <label htmlFor="menor-preco">Menor Preço</label>
                        <input type="checkbox" id="menor-preco" />
                        <label htmlFor="maior-preco" className="ml-1">Maior Preço</label>
                        <input type="checkbox" id="maior-preco" className="ml-1" />
                    </div>
                </section>

                <section className="filter-section">
                    <h3>Avaliação</h3>
                    <div>
                        <label htmlFor="mais-avaliados">Mais bem avaliados</label>
                        <input type="checkbox" id="mais-avaliados" />
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
                        <label htmlFor="novos-servicos">Novos Serviços</label>
                        <input type="checkbox" id="novos-servicos" />
                    </div>
                </section>

                <section className="filter-section">
                    <h3>Horário</h3>
                    <div className="weekdays">
                        <label htmlFor="domingo">Domingo</label>
                        <input type="checkbox" id="domingo" />
                        <label htmlFor="segunda" className="ml-05">Segunda</label>
                        <input type="checkbox" id="segunda" className="ml-05" />
                        <label htmlFor="terca" className="ml-05">Terça</label>
                        <input type="checkbox" id="terca" className="ml-05" />
                        <label htmlFor="quarta" className="ml-05">Quarta</label>
                        <input type="checkbox" id="quarta" className="ml-05" />
                        <label htmlFor="quinta" className="ml-05">Quinta</label>
                        <input type="checkbox" id="quinta" className="ml-05" />
                        <label htmlFor="sexta" className="ml-05">Sexta</label>
                        <input type="checkbox" id="sexta" className="ml-05" />
                        <label htmlFor="sabado" className="ml-05">Sábado</label>
                        <input type="checkbox" id="sabado" className="ml-05" />
                    </div>
                    <div className="shifts">
                        <label htmlFor="manha">Manhã</label>
                        <input type="checkbox" id="manha" />
                        <label htmlFor="tarde" className="ml-05">Tarde</label>
                        <input type="checkbox" id="tarde" className="ml-05" />
                        <label htmlFor="noite" className="ml-05">Noite</label>
                        <input type="checkbox" id="noite" className="ml-05" />
                    </div>
                </section>

                <h2>Mais bem avaliados:</h2>
            </main>
            <Footer />
        </>
    )
}