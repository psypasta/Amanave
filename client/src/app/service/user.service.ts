import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from '../model/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:5000/api/auth/';

  constructor(
    private http: HttpClient,
  ) { }

  addUser(user: User): Observable<any>{
   return this.http.post<User>(this.userURL + 'signup', user, httpOptions).pipe(
   );
  }
}
