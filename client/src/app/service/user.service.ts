import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {User} from '../model/user';

const userURL = 'http://192.168.0.165:5000/users/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "3242342"})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient,
  ) { }

  addUser(user: User): Observable<User>{
   return this.http.post<User>("http://192.168.0.165:5000/api/auth/signup", user, httpOptions);
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(userURL +"get");
  }
  getUser(id: number):Observable<User>{
    return this.http.get<User>(userURL +"get/"+id);
  }
  deleteUsers(id: number):Observable<User>{
    return this.http.delete<User>(userURL + "delete/"+id);
  }
}
