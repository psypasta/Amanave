import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';

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

  ngOnInit() {
  }

  constructor(private categoryService: CategoryService) {
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

}
