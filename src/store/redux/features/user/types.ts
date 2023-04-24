export interface User {
  email: string;
  name: string;
  surname: string;
}

export interface UserState extends User {
  isLogged: boolean;
}
