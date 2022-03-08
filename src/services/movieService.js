import http from "./httpService";
import config from "../config.json";
import * as genresAPI from "./genreService";

const { apiUrl } = config;
const apiEndpoint = `${apiUrl}/movies`;

export function getMovies() {
  return http.get(apiEndpoint);
}

// export function getMovie(id) {
//   return movies.find((m) => m._id === id);
// }

// export function saveMovie(movie) {
//   let movieInDb = movies.find((m) => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

export function deleteMovie(movieId) {
  return http.delete(`${apiEndpoint}/${movieId}`);
}
