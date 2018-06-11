import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: object): Observable<any> {
    console.log('attempAuth ::');
    return this.http.post<object>('http://localhost:5000/api/auth/signin', credentials, httpOptions).pipe();
  }

}
