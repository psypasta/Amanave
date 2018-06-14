import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import {EmitterService} from '../service/emitter.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  // products = this.productService.getProducts();
  observableProducts: Observable<Product[]>;
  products: Product[];

  errorMessage: String;

  product: Product = {
    id: 1,
    name: 'Blue Socks',
    articleNumber: '12345-67',
    category: 1,
    price: 10.61
  };

  id: number;
  name: string;
  articleNumber: string;
  category: number;
  price: number;

  ngOnInit() {
    this.observableProducts = this.productService.getProducts();
    this.observableProducts.subscribe(
      products => this.products = products,
      error =>  this.errorMessage = <any>error);
  }

  onSelect(product: Product): void {
    this.product = product;
    console.log(this.product);
  }

  constructor(private productService: ProductService) {}

  getProduct() {
    this.productService.getProduct(1).subscribe(product => {
      this.product = product;
      console.log(this.product);
    });
  }

  createProduct() {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe();
  }
}
