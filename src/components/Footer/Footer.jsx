// Footer.jsx
import React from 'react';
import './Footer.css';
import { useThemeContext } from '../../context/ThemeContext'; // Importa el contexto del tema
import darkIcon from '../../assets/Icons/darkIcon.png'; // Importa tu propio icono para ambos modos

function Footer() {
  const { toggleTheme } = useThemeContext(); // Obtiene la función para cambiar el tema del contexto del tema

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contacto</h3>
        <p>Correo electrónico: info@mitienda.com</p>
        <p>Teléfono: +34 123-456-789</p>
      </div>
      <div className="footer-section">
        <h3>Redes Sociales</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Dirección</h3>
        <p>Calle Principal, 123</p>
        <p>Ciudad, País</p>
      </div>
      <div className="footer-section">
        {/* Botón de cambio de tema */}
        <button className="theme-toggle-button" onClick={toggleTheme}>
          <img src={darkIcon} alt="Theme Icon" /> {/* Usa tu propio icono para ambos modos */}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
