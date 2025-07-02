// src/services/api.ts
import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import { AxiosHeaders } from 'axios';
import { getAuthState, setToken, clearAuth } from '../store/authStore';

const baseURL = import.meta.env.VITE_API_BASE_URL as string;
console.log('[API] baseURL =', baseURL);

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

// --- Request interceptor ---
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const url = `${config.baseURL}${config.url ?? ''}`;
    console.log('[API] Request to:', url);

    // No le ponemos token a los endpoints de auth
    if (
      config.url?.startsWith('/auth/login') ||
      config.url?.startsWith('/auth/register') ||
      config.url?.startsWith('/auth/refresh')
    ) {
      return config;
    }

    const { token } = getAuthState();
    if (token) {
      // Creamos una instancia de AxiosHeaders para mutar sin errores de tipo
      const headers = new AxiosHeaders(config.headers);
      headers.set('Authorization', `Bearer ${token}`);
      config.headers = headers;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// --- Response interceptor ---
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 'original' es el config de la petición fallida
    const original = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    if (
      error.response?.status === 401 &&
      original.url !== '/auth/refresh' &&
      !original._retry
    ) {
      original._retry = true;
      try {
        const { data } = await api.post('/auth/refresh', {}, { withCredentials: true });
        setToken(data.token);

        // Reintenta con el nuevo token
        const headers = new AxiosHeaders(original.headers);
        headers.set('Authorization', `Bearer ${data.token}`);
        original.headers = headers;
        return api(original);
      } catch (e) {
        clearAuth();
        window.location.href = '/login';
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
