export interface ISignInResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

export interface IUser {
  email:string;
  password:string;
  returnSecureToken:boolean;
}


export const loginErrorMessages = {
  passwordErrorMsg : "Your password should contain between 4 to 60 characters.",
  emailRequiredMsg:"Please enter the correct email or phone number.",
  emailErrorMsg:'Please enter correct email.',
  invalidloginErrorMsg: "Sorry, we couldn't find an account with this email address. Please try again or create a new account ."
}
