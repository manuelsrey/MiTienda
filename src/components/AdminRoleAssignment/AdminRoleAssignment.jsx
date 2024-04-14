import React, { useState } from 'react';

function AdminRoleAssignment() {
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function checkAdmin(email) {
    return email.endsWith('@admin');
  }

  function assignAdminRole() {
    if (checkAdmin(email)) {
      setIsAdmin(true);
      alert('¡Rol de administrador asignado!');
    } else {
      setIsAdmin(false);
      alert('No se ha asignado el rol de administrador.');
    }
  }

  React.useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin);
  }, [isAdmin]);

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={assignAdminRole}>Verificar y Asignar Rol</button>
      {isAdmin && <p>¡Bienvenido Administrador!</p>}
    </div>
  );
}

export default AdminRoleAssignment;
