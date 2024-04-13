import React from 'react';
import './Banner.css';
import { useAuth } from '../../contexts/AuthContext';

function Banner() {
  const { user } = useAuth();

  return (
    <div className="banner">
      {user ? (
        <p>¡Hola, {user.name}! Aprovecha tu 20% de descuento.</p>
      ) : (
        <p>Crea una cuenta para disfrutar de nuestros descuentos.</p>
      )}
    </div>
  );
}

export default Banner;