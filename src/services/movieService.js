import http from "./httpService";
import config from "../config.json";

const { apiUrl } = config;
const apiEndpoint = `${apiUrl}/movies`;

function moviesUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(moviesUrl(movieId));
}

export function saveMovie(movie) {
  //   console.log(movie);

  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    // console.log(body);
    return http.put(moviesUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(moviesUrl(movieId));
}
