import React from 'react';
import { useCart } from '../../context/CartContext'; 

function ShoppingCart() {
  const { cartItems } = useCart(); 

  return (
    <div className="shopping-cart">
      <h2>Carrito de Compras</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
