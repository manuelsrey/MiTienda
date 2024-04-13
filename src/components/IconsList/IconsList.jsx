import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext';

function IconsList({ cartItemCount }) {
  const { isDarkMode, toggleTheme } = useTheme(); 
  const handleThemeChange = () => {
    toggleTheme(); 
  };

  return (
    <div className="icons-list">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-item-count">({cartItemCount})</span>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} onClick={handleThemeChange} />
    </div>
  );
}

export default IconsList;
