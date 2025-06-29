import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: Record<string, any> | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  setToken: (token: string) => {
    // Decodifica payload si es necesario para extraer user
    let user = null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      user = payload;
    } catch {
      user = null;
    }
    set({ token, user, isAuthenticated: true });
  },
  clearToken: () => set({ token: null, user: null, isAuthenticated: false }),
}));

// Helpers para interceptors
export const getAuthState = () => {
  const state = useAuthStore.getState();
  return { token: state.token };
};
export const setToken = (token: string) => useAuthStore.getState().setToken(token);
export const clearAuth = () => useAuthStore.getState().clearToken();
