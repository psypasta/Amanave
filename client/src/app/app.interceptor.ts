import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
import { TokenStorage } from './storage/token.storage';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operators/do';
// import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let authReq = req;
    if (this.token.getToken() != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});
    }
    // this.myObservable().pipe(map(data => {}
    return next.handle(authReq).pipe(
      map((res: HttpResponse<any>) => {
        const body = res.body;
        if (body) {
          console.log('data ', body);
        }
        return res;
      }));

  }
}
