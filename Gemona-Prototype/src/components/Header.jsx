import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  // Verifica se está nas páginas de login ou cadastro
  const hideAuthButtons = location.pathname === '/login' || location.pathname === '/register';

  const handleSearch = (e) => {
    // Only navigate if Enter is pressed and there's a search value
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      e.preventDefault();
      // Route to /services with a query parameter 'q'
      navigate(`/services?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue(''); // Clear the search input after navigation
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
            placeholder="Busca"
            value={searchValue} // Bind input value to state
            onChange={(e) => setSearchValue(e.target.value)} // Update state on change
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