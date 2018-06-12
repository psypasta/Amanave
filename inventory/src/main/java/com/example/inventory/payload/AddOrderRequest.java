package com.example.inventory.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class AddOrderRequest {

    @NotBlank
    @Size(min = 3, max = 40)
    private String job;

    @NotNull
    private List<Long> quantity = new ArrayList<>();

    @NotNull
    private List<Long> products = new ArrayList<>();

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public List<Long> getQuantity() {
        return quantity;
    }

    public void setQuantity(List<Long> quantity) {
        this.quantity = quantity;
    }

    public Iterable<Long> getProducts() {
        Iterable<Long> iterableProducts = products;
        return iterableProducts;
    }

    public void setProducts(List<Long> products) {
        this.products = products;
    }

}
