import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../assets/data.json'; 

function ProductDetail() {
  const { id } = useParams();
  const producto = productos.find((product) => product.id === Number(id));

  const [editedDescription, setEditedDescription] = useState(producto.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleSaveDescription = () => {
    console.log('Descripción editada:', editedDescription);
    setIsEditing(false); 
  };

  const handleDelete = () => {
    console.log('Producto eliminado:', producto);
  };

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title}  />
      <h3>{producto.category}</h3>
      {isEditing ? (
        <textarea
          value={editedDescription}
          onChange={handleDescriptionChange}
        />
      ) : (
        <p>{producto.description}</p>
      )}
      <p>${producto.price}</p>
      {isEditing ? (
        <button onClick={handleSaveDescription}>Guardar Descripción</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Editar Descripción</button>
          <button onClick={handleDelete}>Eliminar Producto</button>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
