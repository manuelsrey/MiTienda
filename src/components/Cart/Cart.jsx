import "./Cart.css";
import CartProduct from "./CartProduct";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const Cart = () => {
  const { user, setUser } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const API_URL = "http://localhost:3000/products";

  const productCounter = {};
  user.shoppingCartItems.forEach((id) => {
    productCounter[id] = (productCounter[id] || 0) + 1;
  });

  const mapeo = products.map((product) => ({
    ...product,
    quantity: productCounter[product.id] || 0,
  }));

  const total = mapeo.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleCheckout = () => {
    alert("Serás redirigido a la pasarela de pago");
    setUser({ ...user, shoppingCartItems: [] });
  };

  const handleReset = () => {
    setUser({ ...user, shoppingCartItems: [] });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="shopping-cart-container">
      <h2>Carrito de Compras</h2>
      {mapeo.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
      <p className="total">Total a Pagar: {total.toFixed(2)}€</p>
      <div className="cart-btn-container">
        <button onClick={handleCheckout} className="btn-comprar">
          Comprar
        </button>
        <button onClick={handleReset} className="btn-resetear">
          Resetear Carro
        </button>
      </div>
    </main>
  );
};

export default Cart;
