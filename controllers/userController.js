const { getMovies, saveMovies } = require('../models/movieModel');
const { getUsers, saveUsers } = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');

const register = (req, res) => {
  const users = getUsers();
  const newUser = { ...req.body, id: uuidv4(), rol: 'usuario' };
  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
};

const login = (req, res) => {
  const users = getUsers();
  const user = users.find(user => user.email === req.body.email && user.password === req.body.password);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'Correo electrónico o contraseña inválido' });
  }
};

const getCatalog = (req, res) => {
  const movies = getMovies();
  const availableMovies = movies.filter(movie => !movie.alquiladoPor);
  res.status(200).json(availableMovies);
};

const rentMovie = (req, res) => {
  const movies = getMovies();
  const index = movies.findIndex(movie => movie.id === req.params.id);
  if (index !== -1 && !movies[index].alquiladoPor) {
    movies[index].alquiladoPor = req.body.userId;
    movies[index].fechaAlquiler = new Date().toISOString();
    saveMovies(movies);
    res.status(200).json(movies[index]);
  } else {
    res.status(404).json({ message: 'La película no se encuentra o ya está alquilada' });
  }
};

const returnMovie = (req, res) => {
  const movies = getMovies();
  const index = movies.findIndex(movie => movie.id === req.params.id);
  if (index !== -1 && movies[index].alquiladoPor === req.body.userId) {
    const fechaAlquiler = new Date(movies[index].fechaAlquiler);
    const fechaDevolucion = new Date();
    const diffTime = Math.abs(fechaDevolucion - fechaAlquiler);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let extraCharge = 0;
    if (diffDays > 2) {
      extraCharge = (diffDays - 2) * 5;
    }
    movies[index].alquiladoPor = null;
    movies[index].fechaAlquiler = null;
    saveMovies(movies);
    res.status(200).json({ message: 'Película devuelta', extraCharge });
  } else {
    res.status(404).json({ message: 'Película no encontrada o rentada por este usuario' });
  }
};

const getRentalHistory = (req, res) => {
  const movies = getMovies();
  const userRentals = movies.filter(movie => movie.alquiladoPor === req.params.userId);
  res.status(200).json(userRentals);
};

module.exports = { register, login, getCatalog, rentMovie, returnMovie, getRentalHistory };
