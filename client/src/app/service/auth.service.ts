import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public jwtHelper: JwtHelperService;
  constructor(){

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
