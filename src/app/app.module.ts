import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './components/login/login.component'
import { MaterialModule } from './share/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { LoginErrorDirective } from './directives/login-error.directive'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { StoreModule } from '@ngrx/store'
import { netflixReducer } from './store/reducers/netflix.reducers'
import { EffectsModule } from '@ngrx/effects'
import { NetflixEffects } from './store/effects/netflix.effects'

@NgModule({
  declarations: [AppComponent, LoginComponent, LoginErrorDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([NetflixEffects]),
    StoreModule.forRoot({ netflix:netflixReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
