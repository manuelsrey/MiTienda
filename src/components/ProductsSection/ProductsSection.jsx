// ProductsSection.jsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsSection.css';

function ProductSection({ productos, searchTerm }) {
  // Filtrar productos si hay un término de búsqueda
  const filteredProducts = searchTerm
    ? productos.filter(product =>
        product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : productos;
  
  return (
    <section className="product-section">
      {}
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductSection;
