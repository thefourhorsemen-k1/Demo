import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

import {JwtResponse} from '../shared/jwt-response';
import {AuthLoginInfo} from '../shared/login-info';
import {User} from '../shared/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://brainmusic-be.herokuapp.com/signin';
  private signupUrl = 'https://brainmusic-be.herokuapp.com/signup';

  constructor(private http: HttpClient,
              public jwtHelper: JwtHelperService) {
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('TOKEN_KEY');
    return !this.jwtHelper.isTokenExpired(token);
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: User): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
