// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir los archivos estáticos generados por React
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Ruta para servir el archivo index.html en todas las rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Configuración de las rutas específicas para la API
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes);

// Escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});
