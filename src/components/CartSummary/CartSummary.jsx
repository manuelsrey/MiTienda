import React from 'react';
import { useCart } from '../../context/CartContext'; 

function CartSummary() {
  const { cartItems } = useCart(); 

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-summary">
      <h2>Resumen del Carrito</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price}</span>
            <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total:</span>
        <span>${calculateTotalPrice()}</span>
      </div>
    </div>
  );
}

export default CartSummary;
