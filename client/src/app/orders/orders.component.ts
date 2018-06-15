import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import {OrderService} from '../service/order.service';
/*
class SerializationHelper {
  static toInstance<T>(obj: T, json: string) : T {
    var jsonObj = JSON.parse(json);

    if (typeof obj["fromJSON"] === "function") {
      obj["fromJSON"](jsonObj);
    }
    else {
      for (var propName in jsonObj) {
        obj[propName] = jsonObj[propName]
      }
    }

    return obj;
  }
}
*/
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  errorMessage: String;

  orders: Order[] = [];
  order: Order = new Order();

  public isLoading = true;

  ngOnInit() {

    this.orderService.getOrders().subscribe(
      orders => {
        console.log('wtf');
        console.log(orders);
        console.log('wtf');
        this.orders = orders;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        if (this.orders.length !== 0) {
          this.order.orderDetailsList = this.orders[0].orderDetailsList;
          this.order.orderStatusSet = this.orders[0].orderStatusSet;
          // this.order = this.orders[0];
          // this.order.products = this.orders[0].products;
          // console.log(this.order.products[0].name);
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
