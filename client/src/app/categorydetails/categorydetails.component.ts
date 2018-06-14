import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {

  oberservableCategorys: Observable<Category[]>;
  categorys: Category[];
  selectedCategory: Category;

  errorMessage: String;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.oberservableCategorys = this.categoryService.getCategorys();
    this.oberservableCategorys.subscribe(
      categorys => this.categorys = categorys,
      error => this.errorMessage = <any>error);
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}
