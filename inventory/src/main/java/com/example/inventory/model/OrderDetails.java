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
import java.util.ArrayList;
import java.util.List;
import java.util.List;

@Entity
@Table(name = "orders_details")
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @NotBlank
    //   @Size(max = 140)

    @ManyToOne(targetEntity = Product.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "product_id", referencedColumnName = "id"),
            @JoinColumn(name = "product_name", referencedColumnName="name")
    })
    private Product product;

    private int quantity;

    //   @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "products",
    //           joinColumns = @JoinColumn(name = "order_id"),
    //           inverseJoinColumns = @JoinColumn(name = "id"))
    //   private List<Product> products = new ArrayList<>();

//  @NotNull
//  private Instant expirationDateTime;

    public OrderDetails() {

    }

    public OrderDetails(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}