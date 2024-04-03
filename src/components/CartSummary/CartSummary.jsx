import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  // Calcular el precio total de los productos en el carrito
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Resumen del Carrito</h2>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default CartSummary;
