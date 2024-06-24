const { getMovies, saveMovies } = require('../models/movieModel');
const { getUsers, saveUsers } = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');

const addMovie = (req, res) => {
  const movies = getMovies();
  const newMovie = { ...req.body, id: uuidv4() };
  movies.push(newMovie);
  saveMovies(movies);
  res.status(201).json(newMovie);
};

const updateMovie = (req, res) => {
  const movies = getMovies();
  const index = movies.findIndex(movie => movie.id === req.params.id);
  if (index !== -1) {
    movies[index] = { ...movies[index], ...req.body };
    saveMovies(movies);
    res.status(200).json(movies[index]);
  } else {
    res.status(404).json({ message: 'Película no encontrada:' });
  }
};

const deleteMovie = (req, res) => {
  const movies = getMovies();
  const filteredMovies = movies.filter(movie => movie.id !== req.params.id);
  if (filteredMovies.length !== movies.length) {
    saveMovies(filteredMovies);
    res.status(200).json({ message: 'Película eliminada' });
  } else {
    res.status(404).json({ message: 'La película no se encontró' });
  }
};

const deleteUser = (req, res) => {
  const users = getUsers();
  const filteredUsers = users.filter(user => user.id !== req.params.id);
  if (filteredUsers.length !== users.length) {
    saveUsers(filteredUsers);
    res.status(200).json({ message: 'Usuario eliminado' });
  } else {
    res.status(404).json({ message: 'Usuario no encontrando' });
  }
};

module.exports = { addMovie, updateMovie, deleteMovie, deleteUser };
