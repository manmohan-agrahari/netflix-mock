import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IUser } from "../constants/netflix-constants";
import { LoginStart } from "../store/actions/netflix.actions";
import { State } from "../store/models/netflix.models";
import { getErrorMsg, getSpinner, getUserState } from "../store/selectors/netflix.selectors";

@Injectable({
  providedIn:'root'
})
export class NetflixFacade {
  constructor(private store:Store<State>) {}
  spinner$ = this.store.select(getSpinner);
  errorMsg$ = this.store.select(getErrorMsg);
  user$ = this.store.select(getUserState);

  login(user:IUser){
    this.store.dispatch(LoginStart({user}))
  }

}
