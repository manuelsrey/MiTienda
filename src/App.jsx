// App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductSection from './components/ProductsSection/ProductsSection';
import Footer from './components/Footer/Footer';
import productos from './assets/data.json'; 
import { CartProvider } from './context/CartContext'; 
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import CartSummary from './components/CartSummary/CartSummary'; 
import { ThemeProvider } from './context/ThemeContext'; 
import LoginForm from './components/LoginForm/LoginForm';
import Banner from './components/Banner/Banner';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCartSummary, setShowCartSummary] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <ThemeProvider> 
      <div className="App">
        <CartProvider> 
          <Header setSearchTerm={setSearchTerm} setShowCartSummary={setShowCartSummary} />
          <Banner user={user} />
          {showCartSummary ? <CartSummary /> : <ProductSection productos={productos} searchTerm={searchTerm} />}
          <Footer />
          <ShoppingCart />
          {user ? (
            <div>
              <p>Bienvenido, {user.name}!</p>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </CartProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
