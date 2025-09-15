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
                        <label><input type="checkbox"/> Menor Preço</label>
                        <label className="ml-1"><input type="checkbox"/> Maior Preço</label>
                    </div>
                </section>

                <section className="filter-section">
                    <h3>Avaliação</h3>
                    <div>
                        <label><input type="checkbox"/> Mais bem avaliados</label>
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
                        <label><input type="checkbox"/> Novos Serviços</label>
                    </div>
                </section>

                <section className="filter-section">
                    <h3>Horário</h3>
                    <div className="weekdays">
                        <label><input type="checkbox" /> Domingo</label>
                        <label className="ml-05"><input type="checkbox" /> Segunda</label>
                        <label className="ml-05"><input type="checkbox" /> Terça</label>
                        <label className="ml-05"><input type="checkbox" /> Quarta</label>
                        <label className="ml-05"><input type="checkbox" /> Quinta</label>
                        <label className="ml-05"><input type="checkbox" /> Sexta</label>
                        <label className="ml-05"><input type="checkbox" /> Sábado</label>
                    </div>
                    <div className="shifts">
                        <label><input type="checkbox" /> Manhã</label>
                        <label className="ml-05"><input type="checkbox" /> Tarde</label>
                        <label className="ml-05"><input type="checkbox" /> Noite</label>
                    </div>
                </section>

                <h2>Mais bem avaliados:</h2>
            </main>
            <Footer />
        </>
    )
}