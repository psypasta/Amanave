package com.example.inventory.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity()
//@Table(name = "product_categories")
public class ProductCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@NaturalId
    @NotBlank
    @Size(max = 40)
    private String categoryName;

    //Here mappedBy indicates that the owner is in the other side
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "productCategories", cascade = CascadeType.ALL)
    private Set<Product> products = new HashSet<>();

    public ProductCategories() {

    }

    public ProductCategories(String categoryName) {
        this.categoryName = categoryName;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }


}
