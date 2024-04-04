// Banner.jsx
import React from 'react';
import './Banner.css';

function Banner({ user }) {
  return (
    <div className="banner">
      {user ? (
        <p>¡{user.name}, aprovechate de tu 20% de descuento!</p>
      ) : (
        <p>Crea una cuenta para disfrutar de nuestros descuentos.</p>
      )}
    </div>
  );
}

export default Banner;
