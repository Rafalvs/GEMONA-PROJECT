import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function Footer() {
    return (
        <>
            <footer>
                <Link to="/contact"><Button>Ajuda</Button></Link>
                <Link to="/contact"><Button>Sobre nós</Button></Link>
            </footer>
        </>
    )
}