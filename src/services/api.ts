// src/services/api.ts
import axios from 'axios';
import { getAuthState, setToken, clearAuth } from '../store/authStore';

// En dev usamos proxy (baseURL vacío); en prod apuntamos al backend real
const baseURL = import.meta.env.DEV
  ? '' 
  : import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080';

console.log('[API] baseURL =', baseURL);

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

// (igual que antes) interceptor de petición:
api.interceptors.request.use(config => {
  console.log('[API] Request to:', (config.baseURL ?? '') + (config.url ?? ''));
  // omitimos token en auth
  if (config.url?.startsWith('/auth/login') ||
      config.url?.startsWith('/auth/register') ||
      config.url?.startsWith('/auth/refresh')) {
    return config;
  }
  const { token } = getAuthState();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// interceptor de respuesta igual que antes…
api.interceptors.response.use(
  resp => resp,
  async err => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retry && import.meta.env.VITE_API_REFRESH_URL) {
      original._retry = true;
      try {
        const { data } = await axios.post(import.meta.env.VITE_API_REFRESH_URL as string, {}, { withCredentials: true });
        setToken(data.token);
        original.headers.Authorization = `Bearer ${data.token}`;
        return api(original);
      } catch (refreshErr) {
        clearAuth();
        window.location.href = '/login';
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(err);
  }
);

export default api;
