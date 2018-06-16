import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Product} from '../model/product';

const productURL = 'http://localhost:5000/products/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  // get one
  getProduct(productId: number): Observable<any> {
    return this.http.get<Product>(productURL + 'get/' + productId);
  }


  // get all
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productURL + 'get');
  }


  // post
  addProduct(product: Product): Observable<any> {
    // console.log('help!!!');
    // return this.http.post<Product>(productURL + 'create', product, httpOptions).pipe(
    // );
    return this.http.post<Product>(productURL + 'create', product, httpOptions).pipe();
  }

  // delete
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(productURL + 'delete/' + id);
  }

  // put
  updateProduct(product: Product, id: number): Observable<any> {
    console.log(product.articleNumber);
    return this.http.put<Product>(productURL + 'update/' + id, product, httpOptions).pipe();
  }


}
