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
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "orders_details")
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

  // @NotBlank
 //   @Size(max = 140)

    @OneToMany
    private Collection<Product> productCollection = new ArrayList<>();

    //   @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "products",
    //           joinColumns = @JoinColumn(name = "order_id"),
    //           inverseJoinColumns = @JoinColumn(name = "id"))
    //   private List<Product> products = new ArrayList<>();

//  @NotNull
//  private Instant expirationDateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Collection<Product> getProductCollection() {
        return productCollection;
    }

    public void setProductCollection(Collection<Product> productCollection) {
        this.productCollection = productCollection;
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