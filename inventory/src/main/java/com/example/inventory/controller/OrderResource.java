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
import java.util.Collections;

@RestController
@RequestMapping("/orders")
public class OrderResource {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    @Autowired
    ProductRepository productRepository;

    @PostMapping("/create")
    public ResponseEntity<?> registerUser(@Valid @RequestBody AddOrderRequest addOrderRequest) {
      /*  if(orderRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(orderRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
*/
        // Creating the order details

        //Gör en ny function för detta ? add products som loopar igenom getProducts settar koasfkjsdflködsf
        OrderDetails orderDetails = new OrderDetails(productRepository.findAllById(addOrderRequest.getProducts()));

        OrderDetails orderDetailsResult = orderDetailsRepository.save(orderDetails);
        // Creating the order
        Order order = new Order(addOrderRequest.getJob());

        order.setOrderDetails(orderDetails);

        Order orderResult = orderRepository.save(order);
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/orders/{job}")
                .buildAndExpand(orderResult.getJob()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Order registered successfully"));
    }

}
