import { Link, useNavigate, useLocation } from 'react-router-dom';

import Button from '../ui/Button';

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
              <Link to="/login">
                <Button variant="primary" className="w-full">
                Entrar
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" className="w-full">
                Cadastro
                </Button>
              </Link>
            </>
        </div>
      </header>
    </>
  );
}