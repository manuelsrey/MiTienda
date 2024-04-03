import React, { useState } from 'react';
import './ProductCard.css';
import { useCart } from '../../context/CartContext'; 

function ProductCard({ product }) {
  const { addToCart } = useCart(); 
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToCart = () => {
    addToCart(product);
    setSelectedItems([...selectedItems, product]); 
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={handleAddToCart}>Añadir a la cesta</button> 
    </div>
  );
}

export default ProductCard;
