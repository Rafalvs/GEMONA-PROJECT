import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

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
            <>
              <Link to="/login"><button>Entrar</button></Link>
              <Link to="/register"><button>Cadastro</button></Link>
            </>
        </div>
      </header>
    </>
  );
}