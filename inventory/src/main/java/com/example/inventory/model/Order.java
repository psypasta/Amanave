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

    //   @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "products",
 //           joinColumns = @JoinColumn(name = "order_id"),
 //           inverseJoinColumns = @JoinColumn(name = "id"))
 //   private List<Product> products = new ArrayList<>();

//  @NotNull
//  private Instant expirationDateTime;

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

  //  public List<Product> getProducts() {
  //      return products;
 //   }

 //   public void setProducts(List<Product> products) {
 //       this.products = products;
 //   }

    /*
    public Instant getExpirationDateTime() {
        return expirationDateTime;
    }

    public void setExpirationDateTime(Instant expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
    } */

  //  public void addProduct(Product product) {
    //    products.add(product);
   //     product.setOrder(this);
   // }

    //public void removeProduct(Product product) {
     //   products.remove(product);
    //    product.setOrder(null);
   // }
}