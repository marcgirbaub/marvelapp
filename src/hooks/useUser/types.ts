export interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginResponse extends UserCredentials {
  name: string;
  surname: string;
}
