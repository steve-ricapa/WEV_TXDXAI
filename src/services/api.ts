// src/services/api.ts
import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import { AxiosHeaders } from 'axios';
import { useAuthStore } from '../store/authStore';

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

    // Skip token injection for auth endpoints
    const path = config.url ?? '';
    if (
      path.startsWith('/auth/login') ||
      path.startsWith('/auth/register') ||
      path.startsWith('/auth/refresh')
    ) {
      return config;
    }

    const token = useAuthStore.getState().token;
    if (token) {
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
    const original = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    // On 401, attempt token refresh once
    if (
      error.response?.status === 401 &&
      original.url !== '/auth/refresh' &&
      !original._retry
    ) {
      original._retry = true;
      try {
        const { data } = await api.post('/auth/refresh', {}, { withCredentials: true });
        useAuthStore.getState().setToken(data.token);

        // Retry original request with new token
        const headers = new AxiosHeaders(original.headers);
        headers.set('Authorization', `Bearer ${data.token}`);
        original.headers = headers;
        return api(original);
      } catch (refreshErr) {
        useAuthStore.getState().clearToken();
        window.location.href = '/login';
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
