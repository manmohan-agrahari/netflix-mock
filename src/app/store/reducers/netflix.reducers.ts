import { createReducer, on } from '@ngrx/store'
import {
  LoginFailed,
  LoginSuccess,
  SetErrorMsg,
  SetSpinner,
} from '../actions/netflix.actions'
import { State } from '../models/netflix.models'

export const initialState: State = {
  user: null,
  errorMsg: false,
  spinner: false,
}

export const netflixReducer = createReducer(
  initialState,
  on(LoginSuccess, (state, action) => {
    return {
      ...initialState,
      user: action.user,
    }
  }),

  on(LoginFailed, (state, action) => {
    return {
      ...state,
      user: null,
    }
  }),
  on(SetErrorMsg, (state, action) => {
    return {
      ...state,
      errorMsg: true,
    }
  }),

  on(SetSpinner, (state, action) => {
    return {
      ...state,
      spinner: true,
    }
  }),
)
