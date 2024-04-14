import React from 'react';
import './ProductCard.css';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext'; 

function ProductCard({ product }) {
  const { user } = useAuth(); 
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); 
    console.log('Producto agregado a la cesta');
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {user && <button onClick={handleAddToCart}>Agregar a la cesta</button>} 
    </div>
  );
}

export default ProductCard;
