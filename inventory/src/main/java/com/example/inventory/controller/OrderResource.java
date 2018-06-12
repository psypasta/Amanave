package com.example.inventory.controller;


import com.example.inventory.exception.AppException;
import com.example.inventory.model.*;
import com.example.inventory.payload.AddOrderRequest;
import com.example.inventory.payload.ApiResponse;
import com.example.inventory.payload.SignUpRequest;
import com.example.inventory.repository.OrderDetailsRepository;
import com.example.inventory.repository.OrderRepository;
import com.example.inventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("/orders")
public class OrderResource {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @PostMapping("/create")
    public ResponseEntity<?> registerOrder(@Valid @RequestBody AddOrderRequest addOrderRequest) {

        Iterable<Long> idList = addOrderRequest.getProducts();
        Iterator<Long> iter = idList.iterator();

        Order order = new Order(addOrderRequest.getJob());
        List<Integer> quantityList = addOrderRequest.getQuantity();
        int i = 0;
        while(iter.hasNext()){

            Product p = productRepository.findById(iter.next()).get();
            OrderDetails orderDetails = new OrderDetails(p, quantityList.get(i));
            order.addOrderDetails(orderDetails);
            System.out.println(p.getId());
            System.out.println(p.getName());
        }

        System.err.println("help");

        Order orderResult = orderRepository.save(order);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/orders/{job}")
                .buildAndExpand(orderResult.getJob()).toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "Order registered successfully"));
    }

}
