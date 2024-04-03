import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsSection.css';

function ProductSection({ productos, searchTerm }) {

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