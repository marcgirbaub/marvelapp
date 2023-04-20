export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserInfo extends UserCredentials {
  name: string;
  surname: string;
}
