import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Product } from '../model/product';

const productUrl = 'http://localhost:5000/product/';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(productId: number): Observable<any> {
    return this.http.get<Product>(productUrl + productId);
  }
}
