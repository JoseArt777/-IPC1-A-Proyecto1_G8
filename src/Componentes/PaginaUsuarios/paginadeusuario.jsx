import React, { useState } from 'react';
import './App.css'; 
const App = () => {
    const [movies, setMovies] = useState([
        {
          id: 1,
          title: 'La La Land',
          image: url ('./Componentes/Activacion/la la land.jpg'),
          rentalPrice: 'Q10.00',
          genre: 'Musical, Drama, Romance',
          rentalDuration: '2 días',
          rented: false,
        },
        {
          id: 2,
          title: 'Inception',
          image: url ('./Componentes/Activacion/Inception.jpg'),
          rentalPrice: 'Q10.00',
          genre: 'Action, Adventure, Sci-Fi',
          rentalDuration: '2 días',
          rented: false,
        },
      ]);

      const handleRentMovie = (id) => {
        const updatedMovies = movies.map(movie => {
            if (movie.id === id) {
              return {
                ...movie,
                rented: true,
              };
            }
            return movie;
          });
      
          setMovies(updatedMovies);
        };

        const availableMovies = movies.filter(movie => !movie.rented);

        return (
            <div className="catalog">
              <h1>Catálogo de Películas Disponibles</h1>
              <div className="movies-list">
                {availableMovies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} onRentMovie={() => handleRentMovie(movie.id)} />
                ))}
              </div>
            </div>
          );
      };
export default PaginaUsuarios