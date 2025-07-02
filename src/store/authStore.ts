import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: any;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
}

// Creamos el store usando persistencia en localStorage
export const useAuthStore = create<AuthState>((set) => {
  // Al inicio, leemos el token ya guardado (si existe)
  const storedToken = localStorage.getItem('authToken');

  return {
    token: storedToken,
    user: null,
    isAuthenticated: Boolean(storedToken),
    setToken: (token: string) => {
      localStorage.setItem('authToken', token);
      set({ token, isAuthenticated: true });
    },
    clearToken: () => {
      localStorage.removeItem('authToken');
      set({ token: null, user: null, isAuthenticated: false });
    },
  };
});
