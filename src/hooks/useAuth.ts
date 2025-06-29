import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuthStore } from '../store/authStore';
import type { RegisterData } from '../services/auth';

interface AuthResponse {
  token: string;
  type: string;
}

export function useAuth() {
  const navigate = useNavigate();
  const { token, user, isAuthenticated, setToken, clearToken } = useAuthStore();

  const login = useCallback(async (username: string, password: string) => {
    const res = await api.post<AuthResponse>('/auth/login', { username, password });
    setToken(res.data.token);
    navigate('/');           // tras login vas al Home
    return res;
  }, [navigate, setToken]);

  const register = useCallback(async (data: RegisterData) => {
    await api.post<AuthResponse>('/auth/register', data);
    navigate('/login');      // tras register vas al Login
  }, [navigate]);

  const logout = useCallback(() => {
    clearToken();
    navigate('/login');      // tras logout vas al Login
  }, [clearToken, navigate]);

  return { token, user, isAuthenticated, login, register, logout };
}
