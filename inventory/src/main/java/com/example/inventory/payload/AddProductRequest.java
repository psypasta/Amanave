package com.example.inventory.payload;

import com.example.inventory.model.ProductCategories;

import javax.validation.constraints.*;
import java.math.BigDecimal;


public class AddProductRequest {
        /*"name" : "Bread",
          "articleNumber" : "133-3337",
          "category" : "Butter",
          "price" : 10.2*/
//    @NotNull
 //   private long id;

    @NotBlank
    @Size(min = 4, max = 40)
    private String name;

    @NotBlank
    @Size(min = 3, max = 15)
    private String articleNumber;

    @NotNull
    private ProductCategories category;

    @DecimalMax("30.00")
    @NotNull
    private BigDecimal price;
/*
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
 */
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArticleNumber(){
        return articleNumber;
    }

    public void setArticleNumber(String articleNumber){
        this.articleNumber = articleNumber;
    }

    public ProductCategories getCategory(){
        return category;
    }

    public void setCategory(ProductCategories category){
        this.category = category;
    }

    public BigDecimal getPrice(){
        return price;
    }

    public void setPrice(BigDecimal price){
        this.price = price;
    }

}