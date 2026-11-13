import axios from "axios";

const api = axios.create({
  baseURL: "/api",   // ← relative! Vite proxies it to :5000
  headers: { "Content-Type": "application/json" },
});

export default api;