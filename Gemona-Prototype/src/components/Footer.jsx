import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <>
        <footer>
            <button><Link to="contact">Ajuda</Link></button>
            <button><Link to="contact">Contatos - Fale Conosco</Link></button>
            <button><Link to="contact">Sobre nós</Link></button>
        </footer>
        </>
    )
}