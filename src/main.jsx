import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import { router } from './router/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(


<React.StrictMode>
        <AuthProvider>
          <ThemeProvider>
            <CartProvider>
              
                
                <RouterProvider router={router} />

                
            </CartProvider>
          </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
  );


