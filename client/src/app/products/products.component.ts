import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {MatTableModule} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];
  products: Product[];
  public isLoading = true;
  errorMessage: String;

  category: Category = {categoryId: 1, categoryName: 'Lamps'};

  product: Product = {
    id: 1,
    name: 'Blue Socks',
    articleNumber: '12345-67',
    category: this.category,
    price: 10.61
  };

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      products => {
          this.dataSource = products;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        if (this.products !== undefined) {
          // this.product = this.products[0];
          //  this.product.category = this.products[0].category; behövs denna?
          // console.log(this.product);
          this.isLoading = false;
        }
      });
  }

  onSelect(product: Product): void {
    console.log('here');
    console.log(product);
    console.log(this.product);
    this.product = product;
    this.product.category = product.category;
    console.log(this.product);
  }

  constructor(private productService: ProductService) {
  }

  getProduct() {
    this.productService.getProduct(1).subscribe(product => {
      this.product = product;
      console.log(this.product);
    });
  }

  createProduct() {
    console.log('here2');
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(products => {
      this.products = products;
    },
      error => {
      },
      () => {
        // this.loading = false;
        this.getProducts();
      });
  }

  updateProduct() {
    console.log(this.product.articleNumber);
    this.productService.updateProduct(this.product, this.product.id).subscribe();
  }
}
