import api from './api';

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  company: { name: string };
}

interface AuthResponse {
  token: string;
  type: string;
}

export const login = (credentials: { username: string; password: string }) => {
  return api.post<AuthResponse>('/auth/login', credentials);
};

export const register = (data: RegisterData) => {
  return api.post<AuthResponse>('/auth/register', data);
};

export const refresh = () => {
  return api.post<AuthResponse>('/auth/refresh', {}, { withCredentials: true });
};
