import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');

  const hideAuthButtons = location.pathname === '/login' || location.pathname === '/register';

  const handleSearch = (e) => {
   
    if (e.key === 'Enter') {
      e.preventDefault();
    
      navigate(`/services?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue('');
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
          <input
            type="text"
            className='busca-input'
            placeholder="Busca"
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className="header-right">
          {!hideAuthButtons && (
            <>
              <Link to="/login">
                <button>Entrar</button>
              </Link>
              <Link to="/register">
                <button>Cadastro</button>
              </Link> 
            </>
          )}
        </div>
      </header>
    </>
  );
}