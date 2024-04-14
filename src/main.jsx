import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'
import CartSummary from './components/CartSummary/CartSummary.jsx'
import { CartProvider } from './contexts/CartContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import NotFound from './views/NotFound/NotFound.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/cart" element={<CartSummary />} />
            <Route path='*' element={<NotFound />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            < Route path="/login" element={< LoginForm /> } />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);