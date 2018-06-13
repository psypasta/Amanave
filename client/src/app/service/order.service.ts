import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';


const orderURL = 'http://localhost:5000/orders/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': null})
};
@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  // post
  addOrder(order: Order): Observable<any>{
    return this.http.post<Order>(orderURL + 'create', order, httpOptions);
  }

  // get all
  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(orderURL + 'get');
  }

  // get one
  getOrder(id: number): Observable<any>{
    return this.http.get<Order>(orderURL + 'get/' + id);
  }

  // delete
  deleteOrder(id: number): Observable<any>{
    return this.http.delete<Order>(orderURL + 'delete/' + id);
  }

  // put
  updateProduct(order: Order, id: number): Observable<any>{
    return this.http.put<Order>(orderURL + 'update/' + id,  order, httpOptions);
  }
}
