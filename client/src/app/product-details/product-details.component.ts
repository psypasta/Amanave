import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService} from '../service/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // products = this.productService.getProducts();
  observableProducts: Observable<Product[]>;
  products: Product[];
  selectedProduct: Product;

  errorMessage: String;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.observableProducts = this.productService.getProducts();
    this.observableProducts.subscribe(
      products => this.products = products,
      error =>  this.errorMessage = <any>error);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
