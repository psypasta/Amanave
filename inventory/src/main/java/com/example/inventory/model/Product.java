package com.example.inventory.model;

import com.example.inventory.model.audit.DateAudit;
import org.hibernate.annotations.NaturalId;
import javax.persistence.*;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
/*
@Table(name = "products", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
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

    @NaturalId
    @NotBlank
    @Size(max = 40)
    private String name;

    @NaturalId
    @NotBlank
    @Size(max = 15)
    private String articleNumber;

    @NotBlank
    @Size(max = 40)
    private String category;

    @Column(precision=10, scale=2)
    @DecimalMax("30.00")
    @NotNull
    private BigDecimal price;

  //  @ManyToOne(fetch = FetchType.LAZY)
    /*@JoinTable(name = "product_unit",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "unit_id"))*/
 //   private Unit unit;

  /*@ManyToOne(targetEntity = Exam.class)
    private long examId;
    otherwise it won't know what to map to. Or even better

    @ManyToOne
    private Exam exam;
  */

 /*   @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
*/
    public Product() {

    }

    public Product(String name, String articleNumber, String category, BigDecimal price) {
        this.name = name;
        this.articleNumber = articleNumber;
        this.category = category;
        this.price = price;
    }
/*
    public Order getOrder(){
        return order;
    }

    public void setOrder(Order order){
        this.order = order;
    }
*/
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String email) {
        this.category = category;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
/*
    public Unit getUnit() { return unit; }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }
*/
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