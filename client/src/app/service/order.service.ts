import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {map} from 'rxjs/operators';
import {OrderList} from '../model/order-list';
import {Product} from '../model/product';


const orderURL = 'http://localhost:5000/orders/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': null})
};
@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  // post
  addOrder(order: Order): Observable<any> {
    return this.http.post<Order>(orderURL + 'create', order, httpOptions);
  }

  // get all
  getOrders(): Observable<any> {
    return this.http.get<OrderList>(orderURL + 'get/');
   // return this.http.get<OrderList>(orderURL + 'get').pipe(map((response: Response) => {
   //   return response;
   // }));
  }

  // get one
  getOrder(id: number): Observable<any> {
    return this.http.get<Order>(orderURL + 'get/' + id);
  }

  // delete
  deleteOrder(id: number): Observable<any> {
    return this.http.delete<Order>(orderURL + 'delete/' + id);
  }

  // put
  updateOrder(order: Order, id: number): Observable<any> {
    return this.http.put<Order>(orderURL + 'update/' + id,  order, httpOptions);
  }
}
