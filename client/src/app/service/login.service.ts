import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from "../model/user";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userURL = 'http://192.168.0.69:5000/api/auth/signin';

  constructor(
    private http: HttpClient,
  ) { }

  login(loginCred: object): Observable<any>{
    return this.http.post<object>(this.userURL, loginCred, httpOptions).pipe(
    )
  }

}
