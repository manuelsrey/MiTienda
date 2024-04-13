import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext';

function IconsList({ cartItemCount }) {
  const { isDarkMode, toggleTheme } = useTheme(); // Obtenemos tanto el estado del modo oscuro como la función para cambiar el tema

  const handleThemeChange = () => {
    toggleTheme(); // Llamamos a la función para cambiar el tema cuando se hace clic en el icono de sol y luna
  };

  return (
    <div className="icons-list">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-item-count">({cartItemCount})</span>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} onClick={handleThemeChange} /> {/* Llamamos a la función handleThemeChange */}
    </div>
  );
}

export default IconsList;
