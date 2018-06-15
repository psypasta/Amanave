import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Category} from '../model/category';

const categoryURL = 'http://localhost:5000/productcategories/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  // get one
  getCategory(categoryId: number): Observable<any> {
    return this.http.get<Category>(categoryURL + 'get/' + categoryId);
  }

  // get all
  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(categoryURL + 'get');

  }

  addCategory(category: Category): Observable<any>{
    return this.http.post<Category>(categoryURL + 'create', category.categoryName, httpOptions).pipe();
  }
}