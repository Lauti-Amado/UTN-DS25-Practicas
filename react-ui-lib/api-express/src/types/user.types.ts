export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  role?: 'USER' | 'ADMIN';
}

export interface UpdateUserRequest {
  email?: string;
  password?: string;
  name?: string;
  role?: 'USER' | 'ADMIN';
}

export interface UserData {
  id: number;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN';
  createdAt: string | Date;
}

export interface UserResponse {
  user: UserData;
  message?: string;
}

export interface UsersListResponse {
  users: UserData[];
  total: number;
  message?: string;
}
