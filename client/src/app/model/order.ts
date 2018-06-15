import {Product} from './product';
import {OrderDetailsList, OrderStatusSet} from './order-list';

export class Order {

  id: number;
  job: string;
  orderDetailsList: OrderDetailsList[];
  orderStatusSet: OrderStatusSet[];
/*  quantity: number[];
  products: Product[];
  */

}

/*
}
  "id": 1,
  "job": "Customer C4",
  "orderStatusSet": [
  {
    "id": 2,
    "name": "WAITING"
  }
],
  "orderDetailsList": [
  {
    "id": 1,
    "product": {
      "id": 1,
      "name": "Light2 A§",
      "articleNumber": "4412453§",
      "price": 41.59,
      "category": {
        "id": 1,
        "categoryName": "Lamps",
        "handler": {},
        "hibernateLazyInitializer": {}
      }
    }
  }
*/
