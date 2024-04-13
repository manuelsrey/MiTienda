import React from 'react';
import { useCart } from '../../contexts/CartContext';

function CartSummary() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="cart-summary">
      <h2>Resumen del Carrito</h2>
      <div className="cart-items">
        {cart.map((item, index) => ( 
          <div key={index} className="cart-item">
            <p>{item.title}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ))}
      </div>
      <p>Total: ${total}</p>
    </section>
  );
}

export default CartSummary;
