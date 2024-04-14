import React, { useState } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import CartSummary from '../CartSummary/CartSummary';
import ProductsSection from '../ProductsSection/ProductsSection';
import productos from '../../assets/data.json';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Layout() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCartSummary, setShowCartSummary] = useState(false);
  const { user } = useAuth(); 

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} setShowCartSummary={setShowCartSummary} />
      <Banner />
      <NavigationBar />
          
      {showCartSummary ? <CartSummary /> : <ProductsSection productos={productos} searchTerm={searchTerm} />}
      {user && <Outlet />} 
      <Footer />
    </div>
  );
}

export default Layout;
