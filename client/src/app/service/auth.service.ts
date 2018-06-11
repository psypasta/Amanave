import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Observable} from "rxjs/index";
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwtHelper: JwtHelperService;
  userURL = 'http://localhost:5000/api/auth/signin';

  constructor(
    private http: HttpClient,
    ){}

  login(loginCred: object): Observable<any>{
    return this.http.post<object>(this.userURL, loginCred, httpOptions).pipe();
  }

  public getToken(): string {
    localStorage.getItem('token');
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean indicating whether or not the token is expired
    return this.jwtHelper.isTokenExpired(token)
  }

}
