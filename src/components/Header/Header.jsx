import React from 'react';
import './Header.css';
import IconsList from '../IconsList/IconsList';
import { useCart } from '../../contexts/CartContext';
import { useTheme } from '../../contexts/ThemeContext';

function Header({ setSearchTerm, setShowCartSummary }) {
  const { cartItemCount } = useCart();
  const { toggleTheme, isDarkMode } = useTheme(); 
  return (
    <header className={isDarkMode ? 'header dark-mode' : 'header light-mode'}>
      <div className="logo" onClick={() => setShowCartSummary(false)}>
        <img src="/logo.png" alt="Logo de la tienda" />
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li onClick={() => setShowCartSummary(true)}>
            <IconsList cartItemCount={cartItemCount} />
            Carrito
          </li>
        </ul>
      </nav>
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconsList onClick={toggleTheme} />
    </header>
  );
}

export default Header;