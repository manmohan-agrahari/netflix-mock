import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment.prod'
import { ISignInResponse, IUser } from '../constants/netflix-constants'

@Injectable({
  providedIn: 'root',
})
export class NetflixService {
  constructor(private http: HttpClient) {}

  /**
   * @param {IUser} user
   * @return {*}
   * @memberof NetflixService
   */
  signIn(user: IUser) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`
    return this.http.post<ISignInResponse>(url,user)
  }
}
