import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png'

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Verifica se está nas páginas de login ou cadastro
  const hideAuthButtons = location.pathname === '/login' || location.pathname === '/register';

  const handleSearch = (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
          navigate('/services');
      }
  };
  return (
    <>
      <header>
        <div className="header-left">
          <Link to="/">
            <img id="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header-center">
          <input type="text" placeholder="Busca" onKeyDown={handleSearch} />
        </div>
        <div className="header-right">
          {!hideAuthButtons && (
            <>
              <Link to="/login"><button>Entrar</button></Link>
              <Link to="/register"><button>Cadastro</button></Link>
            </>
          )}
        </div>
      </header>
    </>
  );
}