import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsSection.css';
import { useCart } from '../../contexts/CartContext';

function ProductsSection({ productos, searchTerm, isAdmin }) {
  const { addToCart } = useCart();

  if (!Array.isArray(productos)) {
    return;
  }

  const filteredProducts = searchTerm
    ? productos.filter((product) =>
        product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : productos;

  return (
    <section className="product-section">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={() => addToCart(product)}
          isAdmin={isAdmin}
          onEdit={() => console.log('Editar producto:', product)}
        />
      ))}
    </section>
  );
}

export default ProductsSection;
