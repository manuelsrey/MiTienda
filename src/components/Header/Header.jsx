// Header.jsx
import React from 'react';
import './Header.css';
import { useCart } from '../../context/CartContext'; // Importa el hook useCart
import cartIcon from '../../assets/Icons/cartIcon.png';

function Header({ setSearchTerm }) {
  const { cartItems } = useCart(); // Obtiene el estado del carrito

  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Logo de la tienda" />
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>
            <img src={cartIcon} alt="Carrito" />
            <span>({cartItems.length})</span></li> {/* Muestra el número de productos en el carrito */}
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
