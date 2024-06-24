const fs = require('fs');
const path = './data/movies.json';

const getMovies = () => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

const saveMovies = (movies) => {
  fs.writeFileSync(path, JSON.stringify(movies, null, 2), 'utf-8');
};

module.exports = { getMovies, saveMovies };
