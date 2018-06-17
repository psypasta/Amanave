import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category = {
    categoryId: 1,
    categoryName: '150w'
  };

  id: number;
  name: string;

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
    console.log('here');
    console.log(category);
    console.log(this.category);
    this.category.categoryId = category.categoryId;
    this.category.categoryName = category.categoryName;
    console.log(this.category);
  }

  getCategory() {
    this.categoryService.getCategory(1).subscribe(category => {
      this.category = category;
      console.log(this.category);
    });
  }

  createCategory() {
    console.log(this.category);
    this.categoryService.addCategory(this.category).subscribe();
  }
  updateCategory() {
    console.log(this.category);
    this.categoryService.updateCategory(this.category, this.category.categoryId).subscribe();
  }
}
