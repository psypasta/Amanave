package com.example.inventory.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "order_status")
public class OrderStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 30)
    private OrderStatusName name;

    public OrderStatus() {

    }

    public OrderStatus(OrderStatusName name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OrderStatusName getName() {
        return name;
    }

    public void setName(OrderStatusName name) {
        this.name = name;
    }
}