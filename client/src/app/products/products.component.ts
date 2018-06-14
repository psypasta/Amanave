import { Component, OnInit} from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import {EmitterService} from '../service/emitter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{

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
  category: string;
  price: number;

  ngOnInit() {
    // this.getProduct();
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
