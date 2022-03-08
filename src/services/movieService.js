import http from "./httpService";
import config from "../config.json";
import * as genresAPI from "./genreService";

const { apiUrl } = config;
const apiEndpoint = `${apiUrl}/movies`;

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(`${apiEndpoint}/${movieId}`);
}

export function saveMovie(movie) {
  return http.patch(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(`${apiEndpoint}/${movieId}`);
}
