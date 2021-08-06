import { createAction, props } from '@ngrx/store'
import { ISignInResponse, IUser } from 'src/app/constants/netflix-constants'

export const LoginStart = createAction(
  '[Login Component] Login Start',
  props<{ user: IUser }>(),
)
export const LoginSuccess = createAction(
  '[Login Component] Login Success',
  props<{ user: ISignInResponse }>(),
)
export const LoginFailed = createAction('[Login Component] Login Failed')
export const SetErrorMsg = createAction(
  '[Login Component] Set Error Msg',
  props<{ errorMsg : boolean }>(),
)
export const SetSpinner = createAction(
  '[Login Component]  Set Spinner ',
  props<{ payload: boolean }>(),
)
