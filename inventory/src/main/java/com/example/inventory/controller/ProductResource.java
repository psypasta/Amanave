package com.example.inventory.controller;

import com.example.inventory.model.Product;
import com.example.inventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class ProductResource {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> retrieveAllProduct() {
        return productRepository.findAll();
    }

    @GetMapping("/product/{id}")
    public Product retrieveProduct(@PathVariable long id) {
        Optional<Product> product = productRepository.findById(id);

        if (!product.isPresent())
            //throw new UserNotFoundException("id-" + id);
            System.out.println("id-" + id);

        return product.get();
    }

    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable long id) {
        productRepository.deleteById(id);
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Object> updateProduct(@RequestBody Product product, @PathVariable long id) {

        Optional<Product> productOptional = productRepository.findById(id);

        if (!productOptional.isPresent())
            return ResponseEntity.notFound().build();

        product.setId(id);

        productRepository.save(product);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/products")
    public ResponseEntity<Object> createProduct(@RequestBody Product product) {
        Product savedProduct = productRepository.save(product);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedProduct.getId()).toUri();

        return ResponseEntity.created(location).build();
    }
}