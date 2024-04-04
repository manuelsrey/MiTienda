import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onLogin({ name, email });
      setName('');
      setEmail('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;
