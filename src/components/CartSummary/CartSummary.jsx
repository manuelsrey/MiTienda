import React from 'react';
import { useCart } from '../../contexts/CartContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function CartSummary() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="cart-summary">
      <Header />
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
      <Link className="form-link" to="/">Volver a inicio</Link>
      <Footer />
    </section>
  );
}

export default CartSummary;
