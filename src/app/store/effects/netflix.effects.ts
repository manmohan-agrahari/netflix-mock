import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NetflixService } from "src/app/dataService/netflix.service";
import { LoginStart, LoginSuccess } from "../actions/netflix.actions";
import {catchError, map, switchMap} from "rxjs/operators"
import { ISignInResponse } from "src/app/constants/netflix-constants";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "../models/netflix.models";




@Injectable()
export class NetflixEffects {
  constructor(private actions$:Actions, private loginService:NetflixService, private store:Store<State>){

  }




  loginEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoginStart),
        switchMap((action) => {


          return this.loginService.signIn(action.user).pipe(

              map((res)=> {
                  return LoginSuccess({user:res})
              },


              ),
              catchError((err)=>{
                console.log(err.error);
                return of(err);
              })

          )
        })
      )
    }
  )
}
