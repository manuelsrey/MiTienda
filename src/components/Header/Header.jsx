import React from 'react';
import './Header.css';
import { useCart } from '../../context/CartContext'; 
import { useThemeContext } from '../../context/ThemeContext'; 
import cartIcon from '../../assets/Icons/cartIcon.png';
import darkIcon from '../../assets/Icons/darkIcon.png'; 

function Header({ setSearchTerm, setShowCartSummary }) {
  const { cartItems } = useCart(); 
  const { theme, toggleTheme } = useThemeContext(); 

  const handleCartIconClick = () => {
    setShowCartSummary(prevState => !prevState);
  };

  return (
    <header className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <div className="logo">
        <img src="/logo.png" alt="Logo de la tienda" />
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>
            <img src={cartIcon} alt="Carrito" id="cartIcon" onClick={handleCartIconClick} />
            <span>({cartItems.length})</span> 
          </li>
          <li>
            
            <button className="theme-toggle-button" onClick={toggleTheme}>
              <img src={darkIcon} alt="Theme Icon" /> 
            </button>
          </li>
        </ul>
      </nav>
   
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
}

export default Header;
