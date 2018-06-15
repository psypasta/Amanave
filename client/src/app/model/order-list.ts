import { Product } from './product';

export interface OrderDetailsList {
  products: Product[];
}

export interface OrderStatusSet {
  id: number;
  name: string;
}

export interface OrderList {

  orderList:  {
    id: number;
    job: string;
    orderDetailsList: OrderDetailsList[];
    orderStatusSet: OrderStatusSet[];
  } ;
}


/*
{
    "orderList": [
        {
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
                        "createdAt": "2018-06-15T18:22:04Z",
                        "updatedAt": "2018-06-15T18:22:04Z",
                        "id": 1,
                        "name": "Light A2",
                        "articleNumber": "44124532",
                        "price": 41.59,
                        "category": {
                            "id": 1,
                            "categoryName": "Lamps",
                            "handler": {},
                            "hibernateLazyInitializer": {}
                        }
                    }
                },
                {
                    "id": 2,
                    "product": {
                        "createdAt": "2018-06-15T18:22:04Z",
                        "updatedAt": "2018-06-15T18:22:04Z",
                        "id": 1,
                        "name": "Light A2",
                        "articleNumber": "44124532",
                        "price": 41.59,
                        "category": {
                            "id": 1,
                            "categoryName": "Lamps",
                            "handler": {},
                            "hibernateLazyInitializer": {}
                        }
                    }
                },
                {
                    "id": 3,
                    "product": {
                        "createdAt": "2018-06-15T18:22:04Z",
                        "updatedAt": "2018-06-15T18:22:04Z",
                        "id": 1,
                        "name": "Light A2",
                        "articleNumber": "44124532",
                        "price": 41.59,
                        "category": {
                            "id": 1,
                            "categoryName": "Lamps",
                            "handler": {},
                            "hibernateLazyInitializer": {}
                        }
                    }
                }
            ]
        }
    ]
}
 */
