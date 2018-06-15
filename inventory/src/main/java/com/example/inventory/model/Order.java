package com.example.inventory.model;


import com.example.inventory.model.audit.UserDateAudit;
import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.*;
import java.util.List;

@Entity
@Table(name = "orders")
// @Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Order extends UserDateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@GenerateValue(strategy = GenerationType.TABLE)
    private Long id;

    @Column
    @NotBlank
    @Size(max = 140)
    private String job;

    @OneToMany(targetEntity = OrderDetails.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ElementCollection
    private List<OrderDetails> orderDetails = new ArrayList<>();

    @ManyToMany(targetEntity = OrderStatus.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "order_order_status",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "order_status_id"))
    private Set<OrderStatus> orderStatusSet = new HashSet<>();

    public Order() {

    }

    public Order(String job) {
        this.job = job;
    }

    public Set<OrderStatus> getOrderStatusSet() {
        return orderStatusSet;
    }

    public void setOrderStatus(Set<OrderStatus> orderStatusSet) {
        this.orderStatusSet = orderStatusSet;
    }

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

    public List<OrderDetails> getOrderDetailsList(){
        return orderDetails;
    }

    public void addOrderDetails(OrderDetails orderDetails) {
        this.orderDetails.add(orderDetails);
    }
}