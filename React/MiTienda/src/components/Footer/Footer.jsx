import React from 'react';
import './Footer.css';

function Footer() {
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
    </footer>
  );
}

export default Footer;
