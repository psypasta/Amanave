import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  errorMessage: String;

  orders: Order[];
  order: Order;

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      orders => {
        console.log(orders);
        this.orders = orders;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        if (this.orders.length !== 0) {
          this.order = this.orders[0];
          console.log(this.order.products[0].name);
        }
      });
  }

  constructor(private orderService: OrderService) {
  }

  onSelect(order: Order): void {
    console.log('here');
    console.log(order);
    console.log(this.order);
    this.order = order;
    console.log(this.order);
  }



  getProduct() {
    this.orderService.getOrder(1).subscribe(order => {
      this.order = order;
      console.log(this.order);
    });
  }

  createProduct() {
    console.log('here2');
    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe();
  }

  updateProduct() {
    console.log(this.order);
    this.orderService.updateOrder(this.order, this.order.id).subscribe();
  }
}
