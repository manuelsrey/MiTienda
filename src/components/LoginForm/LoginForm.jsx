import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'; 

function LoginForm() {
  const { login, logout, user } = useAuth(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError('Por favor, rellena todos los campos');
      return;
    }

    
    login({ name, email });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>¡Hola, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
