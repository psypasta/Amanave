import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {User} from '../model/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://192.168.0.165:5000/';

  constructor(
    private http: HttpClient,
  ) { }

  addUser(user: User): Observable<any>{
   return this.http.post<User>(this.userURL + 'api/auth/signup', user, httpOptions).pipe();
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userURL + 'users/get');
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.userURL + 'users/get/' + id);
  }
  // deleteUsers(user:User | number)
}
