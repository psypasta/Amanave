import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[];

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
        console.log(products);
        this.products = products;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        if (this.products.length !== 0) {
          this.product = this.products[0];
          //  this.product.category = this.products[0].category; behövs denna?
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
