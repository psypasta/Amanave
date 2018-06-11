import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from "../model/user";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': null})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://192.168.0.69:5000/';

  constructor(
    private http: HttpClient,
  ) { }

  addUser(user: User): Observable<any>{
   return this.http.post<User>(this.userURL + "api/auth/signup", user, httpOptions).pipe(
   )
  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userURL +"users");
  }
  getUser(id: number):Observable<User>{
    return this.http.get<User>(this.userURL +"users/"+id);
  }
  //deleteUsers(user:User | number)
}
