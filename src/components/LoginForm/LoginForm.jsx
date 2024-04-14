import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user, login, logout } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, email });
  };

  if (user) {
    return (
      <div className="form">
        <p>Bienvenido, {user.name}!</p>
        <Link className="form-link" to="/">Volver a inicio</Link>

        <button onClick={logout}>Cerrar Sesión</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Header />
      <input
        className="form-input"
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="form-button" type="submit">Iniciar Sesión</button>
      <Link className="form-link" to="/">Volver a inicio</Link>
      <Footer />
    </form>
  );
}

export default LoginForm;