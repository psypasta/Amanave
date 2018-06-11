import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Product } from '../model/product';
import {User} from "../model/user";

const productURL = 'http://localhost:5000/products/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': null})
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(productId: number): Observable<any> {
    return this.http.get<Product>(productURL + 'get/' + productId);}
  addproduct(product: Product): Observable<any>{
    return this.http.post<Product>(productURL + 'create', product, httpOptions).pipe(
    );
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productURL + 'get');
  }

}
