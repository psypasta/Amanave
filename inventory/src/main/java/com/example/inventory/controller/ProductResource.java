package com.example.inventory.controller;

import com.example.inventory.exception.AppException;
import com.example.inventory.model.Product;
import com.example.inventory.model.Role;
import com.example.inventory.model.RoleName;
import com.example.inventory.model.User;
import com.example.inventory.payload.AddProductRequest;
import com.example.inventory.payload.ApiResponse;
import com.example.inventory.payload.SignUpRequest;
import com.example.inventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductResource {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/get")
    public List<Product> retrieveAllProduct() {
        return productRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public Product retrieveProduct(@PathVariable long id) {
        Optional<Product> product = productRepository.findById(id);

        if (!product.isPresent())
            //throw new UserNotFoundException("id-" + id);
            System.out.println("id-" + id);

        return product.get();
    }

    @CrossOrigin(origins = "http://localhost:5000/products")
    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable long id) {
        productRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:5000/products")
    @PutMapping("/update/{id}")
    public ResponseEntity<Object> updateProduct(@RequestBody Product product, @PathVariable long id) {

        Optional<Product> productOptional = productRepository.findById(id);

        if (!productOptional.isPresent())
            return ResponseEntity.notFound().build();

        product.setId(id);

        productRepository.save(product);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createProduct(@RequestBody AddProductRequest productRequest) {

        if(productRepository.existsByName(productRequest.getName())) {
            return new ResponseEntity(new ApiResponse(false, "Product name is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(productRepository.existsByArticleNumber(productRequest.getArticleNumber())) {
            return new ResponseEntity(new ApiResponse(false, "Article Number is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        //(String name, String articleNumber, String category, BigDecimal price)
        Product product = new Product(productRequest.getName(), productRequest.getArticleNumber(),
                                        productRequest.getCategory(), productRequest.getPrice());

        Product savedProduct = productRepository.save(product);


        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/products/{username}")
                .buildAndExpand(savedProduct.getName()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Product registered successfully"));
    }
}