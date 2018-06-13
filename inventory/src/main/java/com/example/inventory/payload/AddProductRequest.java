package com.example.inventory.payload;

import javax.validation.constraints.*;
import java.math.BigDecimal;


public class AddProductRequest {
        /*"name" : "Bread",
          "articleNumber" : "133-3337",
          "category" : "Butter",
          "price" : 10.2*/

    @NotBlank
    @Size(min = 4, max = 40)
    private String name;

    @NotBlank
    @Size(min = 3, max = 15)
    private String articleNumber;

    @NotBlank
    private long category;

    @DecimalMax("30.00")
    @NotNull
    private BigDecimal price;

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

    public long getCategory(){
        return category;
    }

    public void setCategory(long category){
        this.category = category;
    }

    public BigDecimal getPrice(){
        return price;
    }

    public void setPrice(BigDecimal price){
        this.price = price;
    }

}