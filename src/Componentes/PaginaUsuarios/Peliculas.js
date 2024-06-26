import React from 'react';
import PaginaUsuarios from './paginadeusuario';

const MovieCard = ({ movie, onRentMovie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p><strong>Precio de Alquiler:</strong> {movie.rentalPrice}</p>
        <p><strong>Género:</strong> {movie.genre}</p>
        <p><strong>Duración del Alquiler:</strong> {movie.rentalDuration}</p>
        <button onClick={onRentMovie} disabled={movie.rented}>Alquilar</button>
      </div>
    </div>
  );
};

export default PaginaUsuarios;