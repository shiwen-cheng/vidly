/*
for login & logout
*/
import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/auth`;
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password }); // return a promise
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey); // 删除 JWT
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getCurUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null; // 当未登录时（匿名用户状态），没有当前用户
  }
}

export default { login, loginWithJwt, logout, getCurUser, getJwt };
