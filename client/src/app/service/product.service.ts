import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Product } from '../model/product';
import {User} from "../model/user";

const productURL = 'http://192.168.0.165:5000/products/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': null})
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  //get one
  getProduct(productId: number): Observable<any> {
    return this.http.get<Product>(productURL + 'get/' + productId);}

    //post
  addproduct(product: Product): Observable<any>{
    return this.http.post<Product>(productURL + 'create', product, httpOptions).pipe(
    );
  }

  //get all
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productURL + 'get');
  }

  //delete
  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(productURL + 'delete/' + id);
  }

  //put
  updateProduct(product: Product, id: number): Observable<any>{
    return this.http.put<Product>(productURL + 'update/' + id,  product, httpOptions);
  }



}
