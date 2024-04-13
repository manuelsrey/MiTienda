// Layout.jsx
import React, {useState} from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import CartSummary from '../CartSummary/CartSummary';
import ProductsSection from '../ProductsSection/ProductsSection';
import productos from '../../assets/data.json'
import LoginForm from '../LoginForm/LoginForm';

function Layout({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [showCartSummary, setShowCartSummary] = useState(false);

    const handleLogin = () => {
        console.log('Usuario ha iniciado sesión');
      };

  return (
    <div>
        <Header setSearchTerm={setSearchTerm} setShowCartSummary={setShowCartSummary} />
            <Banner />
            <NavigationBar />
                
            {showCartSummary ? <CartSummary /> : <ProductsSection productos={productos} searchTerm={searchTerm} />}
            <Footer />
            <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default Layout;
