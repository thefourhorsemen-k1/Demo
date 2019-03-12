import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { JwtResponse } from '../shared/jwt-response';
import { AuthLoginInfo } from '../shared/login-info';
import { User } from '../shared/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/signin';
  private signupUrl = 'http://localhost:8080/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: User): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
