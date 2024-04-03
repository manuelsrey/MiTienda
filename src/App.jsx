import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductSection from './components/ProductsSection/ProductsSection';
import Footer from './components/Footer/Footer';
import productos from './assets/data.json'; 
import { CartProvider } from './context/CartContext'; 
import ShoppingCart from './components/ShoppingCart/ShoppingCart'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <CartProvider> 
        <Header setSearchTerm={setSearchTerm} />
        <ProductSection productos={productos} searchTerm={searchTerm} />
        <Footer />
        <ShoppingCart /> 
      </CartProvider>
    </div>
  );
}

export default App;
