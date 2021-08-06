import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms'
import { Store } from '@ngrx/store';
import { IUser,loginErrorMessages } from 'src/app/constants/netflix-constants';
import { NetflixService } from 'src/app/dataService/netflix.service';
import { NetflixFacade } from 'src/app/services/netflix.facade';
import { LoginStart } from 'src/app/store/actions/netflix.actions';
import { State } from 'src/app/store/models/netflix.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  spin:boolean;
  errMsg=loginErrorMessages;
  errorMsgDisplay:boolean;

  constructor(private loginService:NetflixService, private store :Store<State>,
    private loginFacade:NetflixFacade) { }

  ngOnInit(): void {
    this.loginForm =new FormGroup({
     email:new FormControl('',[Validators.required, Validators.email]),
     password:new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(40)]),
     checked: new FormControl(false)
    });
  this.loginFacade.errorMsg$.subscribe((res)=>{
    this.errorMsgDisplay = res
  })

  this.loginFacade.spinner$.subscribe((res)=> {
    this.spin = res
  })
  }

  loginSubmit(){
    const user:IUser= {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
      returnSecureToken:true

    }
    if(!this.loginForm.invalid) {
      this.loginFacade.setSpinner(true)
      this.loginFacade.login(user)
    }


  }

}
