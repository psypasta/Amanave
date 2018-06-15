package com.example.inventory.model;

import com.example.inventory.model.audit.DateAudit;
import com.example.inventory.model.audit.UserDateAudit;
import org.hibernate.annotations.NaturalId;
import javax.persistence.*;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Objects;

@Entity
/*@Table(name = "products", uniqueConstraints = {
        @UniqueConstraint(columnNames = {               //Item of interest - max
                "article_number"
        }),
        @UniqueConstraint(columnNames = {
                "name"
        })
})*/
@Table(name = "products")
public class Product extends DateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NaturalId(mutable = true)
    @NotBlank
    @Size(max = 40)
    private String name;

    @NaturalId(mutable = true)
    @NotBlank
    @Size(max = 20)
    private String articleNumber;
/*
    @NotBlank
    @Size(max = 40)
    private String category;
*/
/*
    @OneToMany
    @NotNull
    @ElementCollection
    @JoinTable(name = "product_product_category",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "product_category_id"))
    private Collection<ProductCategories> productCategories;*/

    //Here JoinColumn states that this entity is the owner of the relationship
  /*  @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategories productCategories;*/
    @ManyToOne(targetEntity = ProductCategories.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategories productCategories;

    @Column(precision=10, scale=2)
    @DecimalMax("10000.00")
    @NotNull
    private BigDecimal price;


    //@JoinTable(name = "product_unit"
    //@JoinColumn(name = "id"),
     //       inverseJoinColumns = @JoinColumn(name = "unit_id"))*/
    @OneToOne(targetEntity = Unit.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Unit unit;

  //  @ManyToOne(fetch = FetchType.LAZY)
  //  @JoinColumn(name = "order_id", nullable = false)
  //  private OrderDetails orderDetails;

    public Product() {

    }

    public Product(String name, String articleNumber, BigDecimal price) {
        this.name = name;
        this.articleNumber = articleNumber;
        this.price = price;
    }

    public void setCategory(ProductCategories productCategories){
        this.productCategories = productCategories;
    }

    public ProductCategories getCategory(){
        return productCategories;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArticleNumber() {
        return articleNumber;
    }

    public void setArticleNumber(String username) {
        this.articleNumber = articleNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}