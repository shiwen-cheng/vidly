/*
for login & logout
*/
import http from "./httpService";
import config from "../config.json";

const { apiUrl } = config;
const apiEndpoint = `${apiUrl}/auth`;

export function login(email, password) {
  return http.post(apiEndpoint, { email, password }); // return a promise
}
