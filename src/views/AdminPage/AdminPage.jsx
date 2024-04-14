import React from 'react';

function AdminPage() {
  function performAdminAction() {
    alert('Acción de administrador realizada');
  }

  return (
    <div>
      <h1>Página de Administrador</h1>
      <button onClick={performAdminAction}>Realizar Acción de Administrador</button>
    </div>
  );
}

export default AdminPage;
