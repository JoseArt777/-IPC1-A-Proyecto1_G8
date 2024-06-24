// src/LoginForm.js
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Formulario enviado con: \nNombre: ${name} \nEmail: ${email}`);
  };

  const handleRegister = (userData) => {
    // Aquí puedes manejar la lógica para registrar al usuario
    alert(`Registrando usuario: ${userData.username}`);
    // Puedes agregar más lógica aquí, como enviar los datos al servidor
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="login-form">
      {!showRegisterForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Usuario:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Contraseña:</label>
            <input
              type="password"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
          <p>
            No tienes una cuenta,{" "}
            <button type="button" onClick={toggleRegisterForm}>
              regístrate
            </button>
          </p>
        </form>
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}
    </div>
  );
}

export default LoginForm;
