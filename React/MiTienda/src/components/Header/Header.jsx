import React from 'react';
import './Header.css';

function Header({ setSearchTerm }) {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Logo de la tienda" />
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Carrito</li>
        
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
