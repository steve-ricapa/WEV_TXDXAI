// src/types/Auth.ts
export interface AuthResponse {
  token: string;
  type: string;
}

export interface UserPayload {
  id: number;
  username: string;
  email: string;
  // otros campos según el payload JWT
}
