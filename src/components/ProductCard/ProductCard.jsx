// ProductCard.jsx
import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Agrega más detalles del producto según sea necesario */}
    </div>
  );
}

export default ProductCard;
