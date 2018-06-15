package com.example.inventory.payload;

import com.example.inventory.model.Order;
import com.example.inventory.model.OrderDetails;
import com.example.inventory.model.OrderStatus;

import java.util.List;
import java.util.Set;

public class GetOrdersResponse {
/*
    private List<Long> idList;

    private String job;

    private List<OrderDetails> orderDetails;

    private List<OrderStatus> orderStatusSet;
*/
    private List<Order> orderList;

    public GetOrdersResponse(List<Order> orderList){
       /* for(int i = 0; i < orderList.size(); i++){
            this.id = id;
            this.job = job;
            this.orderDetails = orderDetails;
            this.orderStatusSet = orderStatusSet;
        }
        */
       this.orderList = orderList;
    }

    public List<Order> getOrderList(){
        return orderList;
    }

    public void setOrderList(List orderList){
        this.orderList = orderList;
    }
/*
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public List<OrderDetails> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetails> orderDetails) {
        this.orderDetails = orderDetails;
    }

    public Set<OrderStatus> getOrderStatusSet() {
        return orderStatusSet;
    }

    public void setOrderStatusSet(Set<OrderStatus> orderStatusSet) {
        this.orderStatusSet = orderStatusSet;
    }
*/
}
