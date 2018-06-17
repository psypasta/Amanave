import {Product} from './product';

export class Order {

  id: number;
  job: string;
  orderDetailsList: Product[];
  orderStatusSet: OrderStatusSet;
}
/*
export interface OrderDetailsList {
  id: number;

  // quantity: number[];
}
*/
export interface OrderStatusSet {
  id: number;
  name: string;
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
