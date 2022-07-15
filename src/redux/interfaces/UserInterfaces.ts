export interface LoginUser {
  username: string;
  password: string;
}

export interface UserData {
  name: string;
  surname: string;
  username: string;
}
export interface UserState extends UserData {
  logged: boolean;
}
