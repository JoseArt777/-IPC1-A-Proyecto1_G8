// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos generados por React
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Ruta para servir el archivo index.html en todas las rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Configuración de las rutas específicas para la API
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// Escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
