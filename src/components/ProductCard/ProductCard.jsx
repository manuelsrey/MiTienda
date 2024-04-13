import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={addToCart}>Agregar a la cesta</button>
    </div>
  );
}

export default ProductCard;