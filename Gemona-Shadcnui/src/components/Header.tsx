import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

// Import shadcn/ui components
import { Input } from './ui/input'; 
import { Button } from './ui/button';

export default function Header() {  
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');

  const hideAuthButtons = location.pathname === '/login' || location.pathname === '/register';

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedSearchValue = searchValue.trim();
      if (trimmedSearchValue) {
        navigate(`/services?q=${encodeURIComponent(trimmedSearchValue)}`);
        setSearchValue('');
      }
    }
  };

  return (
    <header className="flex items-center justify-between bg-primary text-primary-foreground p-4 text-base md:text-lg">
      <div className="flex-none">
        <Link to="/">
          <img id="logo" src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      <div className="flex-grow flex justify-center items-center px-4">
        <Input
          type="text"
          placeholder="Busca"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full max-w-md"
        />
      </div>

      <div className="flex-none flex items-center gap-2">
        {!hideAuthButtons && (
          <>
            <Link to="/login">
              <Button variant="outline" className="text-sm px-3 py-1.5 md:px-4 md:py-2">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button className="text-sm px-3 py-1.5 md:px-4 md:py-2">Cadastro</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}