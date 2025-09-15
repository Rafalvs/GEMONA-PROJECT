import Header from "../Header"
import Footer from "../Footer"

export default function Services(){
    return(
        <>
            <Header />
                <main>
                    <span>Preços</span>
                    <label>Menor Preço</label>
                    <input type="checkbox"/>
                    <label>Maior Preço</label>
                    <input type="checkbox"/>
                    <span>Avaliação</span>
                    <span>Distância</span>
                    <span>Novos Serviços</span>
                    <span>Horário</span>


                    <h2>Mais bem avaliados:</h2>
                </main>
            <Footer />
        </>
    )
}