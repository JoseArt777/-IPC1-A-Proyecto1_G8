// src/App.js
import React from 'react';
import LoginForm from './LoginForm';
import './App.css'; // Asegúrate de tener estilos básicos

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Iniciar Sesión</h1>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
