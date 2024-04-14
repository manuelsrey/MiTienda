import React from 'react';
import './ProductCard.css';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

function ProductCard({ product, isAdmin, onEdit }) {
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Producto agregado a la cesta');
  };

  const handleDelete = () => {
    console.log('Producto eliminado');
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {user && <button onClick={handleAddToCart}>Agregar a la cesta</button>}
      {isAdmin && (
        <>
          <button onClick={onEdit}>Editar Producto</button>
          <button onClick={handleDelete}>Eliminar Producto</button>
        </>
      )}
    </div>
  );
}

export default ProductCard;
