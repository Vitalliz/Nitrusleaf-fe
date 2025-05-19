// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // Substitua pela URL da sua API
});

// Adicionar um interceptor para incluir automaticamente o token de acesso
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Função para renovar o token automaticamente se o accessToken expirar
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post("http://localhost:4000/auth/refresh", {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        localStorage.setItem("accessToken", data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axios(originalRequest);
      } catch (err) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/"; // Redireciona para o login
      }
    }
    return Promise.reject(error);
  }
);

export default api;