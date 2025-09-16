import Header from "../Header"
import Footer from "../Footer"
import { useState } from "react";

export default function Services(){
    const [distance, setDistance] = useState(1);
    return(
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
                    <div className="service-box">
                        <h4>Engenheiro</h4>
                        <p>Projetos, cálculos e acompanhamento de obras residenciais, comerciais e industriais.</p>
                    </div>
                    <div className="service-box">
                        <h4>Cozinheira</h4>
                        <p>Preparação de refeições, cardápios personalizados e serviços para eventos ou famílias.</p>
                    </div>
                    <div className="service-box">
                        <h4>Manicure e Pedicure</h4>
                        <p>Cuidados com unhas, esmaltação, design e tratamentos para mãos e pés.</p>
                    </div>
                    <div className="service-box">
                        <h4>Personal Trainer</h4>
                        <p>Treinos personalizados, acompanhamento físico e orientação para saúde e bem-estar.</p>
                    </div>
                    <div className="service-box">
                        <h4>Cabeleireiros</h4>
                        <p>Cortes, coloração, hidratação, penteados e tratamentos capilares.</p>
                    </div>
                    <div className="service-box">
                        <h4>Nutricionista</h4>
                        <p>Consultoria alimentar, planos nutricionais e acompanhamento de dietas.</p>
                    </div>
                    <div className="service-box">
                        <h4>Dedetizador</h4>
                        <p>Controle de pragas, desinsetização e serviços para residências e empresas.</p>
                    </div>
                    <div className="service-box">
                        <h4>Motorista com Veículo Próprio</h4>
                        <p>Transporte executivo, viagens, entregas e serviços personalizados.</p>
                    </div>
                    <div className="service-box">
                        <h4>Assistência para Notebooks</h4>
                        <p>Manutenção, reparos, upgrades e suporte técnico para notebooks.</p>
                    </div>
                    <div className="service-box">
                        <h4>Bartenders</h4>
                        <p>Preparação de drinks, coquetéis e atendimento em festas e eventos.</p>
                    </div>
                    <div className="service-box">
                        <h4>Arquitetos</h4>
                        <p>Projetos arquitetônicos, decoração, reformas e consultoria de ambientes.</p>
                    </div>
                    <div className="service-box">
                        <h4>Criação de Logos</h4>
                        <p>Design de logotipos, identidade visual e branding para empresas e profissionais.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}