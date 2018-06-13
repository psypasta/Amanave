package com.example.inventory.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Entity()
@Table(name = "product_categories")
public class ProductCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NaturalId
    @NotBlank
    @Size(max = 40)
    private String categoryName;

    public ProductCategories() {

    }

    public ProductCategories(String categoryName) {i    
        this.categoryName = categoryName;

    }

}
