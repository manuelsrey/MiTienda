import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../assets/data.json'; 

function ProductDetail() {
  const { id } = useParams();

  const producto = productos.find((product) => product.id === Number(id));



  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title}  />
      <h3>{producto.category}</h3>
      <p>{producto.description}</p>
      <p>${producto.price}</p>
    </div>
  );
}

export default ProductDetail;