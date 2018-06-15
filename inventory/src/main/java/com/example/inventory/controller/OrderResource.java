package com.example.inventory.controller;


import com.example.inventory.exception.AppException;
import com.example.inventory.model.*;
import com.example.inventory.payload.AddOrderRequest;
import com.example.inventory.payload.ApiResponse;
import com.example.inventory.payload.GetOrdersResponse;
import com.example.inventory.payload.SignUpRequest;
import com.example.inventory.repository.OrderDetailsRepository;
import com.example.inventory.repository.OrderRepository;
import com.example.inventory.repository.OrderStatusRepository;
import com.example.inventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("/orders")
public class OrderResource {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderStatusRepository orderStatusRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/get")
    @ResponseBody
    public ResponseEntity<GetOrdersResponse> retrieveAllOrders() {

        List<Order> orderList = orderRepository.findAll();

        for (int i = 0; i < orderList.size(); i++) {
            System.err.println(orderList.get(i));
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add("Content-Type", "application/json; charset=utf-8");

        if(orderList.isEmpty()) {
            System.err.println("null");
            return new ResponseEntity<GetOrdersResponse>(null, responseHeaders, HttpStatus.OK);
        } else {
            System.err.println("inte null");
            return new ResponseEntity<GetOrdersResponse>(new GetOrdersResponse(orderList), responseHeaders, HttpStatus.OK);
        }
    }

    @GetMapping("/get/{id}")
    public Order retrieveOrder(@PathVariable long id) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if(!orderOptional.isPresent()){
            //throw new orderNotfound exception
            // add something here and over at some of the other apis aswell?
        }
        return orderOptional.get();
    }

    @CrossOrigin(origins = "http://localhost:5000/orders")
    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable long id) {
        orderRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:5000/orders")
    @PutMapping("/update/{id}")
    public ResponseEntity<Object> updateProduct(@RequestBody Order order, @PathVariable long id) {

        Optional<Order> orderOptional = orderRepository.findById(id);

        if (!orderOptional.isPresent())
            return ResponseEntity.notFound().build();

        order.setId(id);

        orderRepository.save(order);

        return ResponseEntity.noContent().build();
    }

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
            //   System.out.println(p.getId());
            //   System.out.println(p.getName());
        }

        System.err.println("help");

        OrderStatus orderStatus = orderStatusRepository.findByName(OrderStatusName.WAITING)
                .orElseThrow(() -> new AppException("Order Status not set."));

        order.setOrderStatus(Collections.singleton(orderStatus));

        Order orderResult = orderRepository.save(order);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/orders/{job}")
                .buildAndExpand(orderResult.getJob()).toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "Order registered successfully"));
    }

}
