
export interface IUser {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}


export interface State {
  user:IUser | null;
  errorMsg:boolean;
  spinner: boolean;
}
