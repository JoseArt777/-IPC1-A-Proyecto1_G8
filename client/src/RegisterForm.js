// src/RegisterForm.js
import React, { useState } from 'react';

function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías validar los campos del formulario antes de enviarlos
    onRegister({ username, password, firstName, lastName, gender, email, birthdate });
  };

  const validatePassword = (value) => {
    // Validación básica para la contraseña: mínimo 8 caracteres, incluir una mayúscula y números
    const regex = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(value);
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Género:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Seleccione...</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthdate">Fecha de nacimiento:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterForm;
