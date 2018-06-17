import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import {OrderService} from '../service/order.service';
import {OrderList} from '../model/order-list';
import {Product} from '../model/product';
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
  // orders: OrderList = new OrderList();
  order: Order = new Order();
  public isLoading = true;

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        if (this.orders !== undefined) {
          this.order = this.orders[0];
          // this.order.orderDetailsList = this.orders.orderList[0].orderDetailsList;
          // this.order.orderDetailsList.product = this.orders.orderList[0].orderDetailsList.product;
          console.log(this.order);
          console.log(this.orders);
          console.log(this.order.orderDetailsList[0].name)
          //  this.product.category = this.products[0].category; behövs denna?
          this.isLoading = false;
        }
      });
    /*
    this.orderService.getOrders().subscribe(
      orders => {
        this.orderList = orders
        console.log(orders);
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        if (this.orderList !== undefined) {
          this.order = this.orderList[0];
          console.log(this.orderList[0]);
          console.log(this.orderList);
          console.log(this.order);
          console.log(this.orderList);

          //  this.product.category = this.products[0].category; behövs denna?
          this.isLoading = false;
        }
      }); */
/*
    this.orderService.getOrders().subscribe(
      (orders: OrderList) => {
        console.log('wtf');
        console.log(orders);
        console.log('wtf');
        this.orders = orders.orderList.orders;
        console.log(orders[0]);
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        console.log(this.orders.length);
        if (this.orders.length !== 0) {
          // this.order.orderDetailsList = this.orders[0].orderDetailsList;
          // this.order.orderStatusSet = this.orders[0].orderStatusSet;
          // this.order = this.orders[0];
          // this.order.products = this.orders[0].products;
          // console.log(this.order.products[0].name);
        }
      });
    console.log(this.orders.length); */
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



  getOrder() {
    this.orderService.getOrder(1).subscribe(order => {
      this.order = order;
      console.log(this.order);
    });
  }

  createOrder() {
    console.log('here2');
    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe();
  }

  updateOrder() {
    console.log(this.order);
    this.orderService.updateOrder(this.order, this.order.id).subscribe();
  }
}
