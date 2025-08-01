export interface RegisterRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface AuthResponse {
  user: {
    id: number;
    email: string;
    role: string;
    firstName?: string;
    lastName?: string;
  };
  accessToken: string;
  refreshToken: string;
}