// Header.jsx
import React from 'react';
import './Header.css'; // Importa el archivo CSS

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
          {/* Agrega más elementos de menú según sea necesario */}
        </ul>
      </nav>
      {/* Barra de búsqueda */}
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
      />
    </header>
  );
}

export default Header;
