package com.example.inventory.controller;

import com.example.inventory.model.*;
import com.example.inventory.payload.AddProductRequest;
import com.example.inventory.payload.ApiResponse;
import com.example.inventory.payload.UpdateProductRequest;
import com.example.inventory.repository.ProductCategoryRepository;
import com.example.inventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductResource {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    ProductCategoryRepository productCategoryRepository;

    @GetMapping("/get")
    public List<Product> retrieveAllProduct()  {
        return productRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public Product retrieveProduct(@PathVariable long id) {
        Optional<Product> product = productRepository.findById(id);

     //   if (!product.isPresent())
      //      return new Exception("id-" + id);

        return product.get();
    }

    @CrossOrigin(origins = "http://localhost:5000/products")
    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable long id) {
        productRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:5000/products")
    @PutMapping("/update/{id}")
    public ResponseEntity<Object> updateProduct(@RequestBody UpdateProductRequest productRequest, @PathVariable long id) {

        Optional<Product> productOptional = productRepository.findById(id);

        if (!productOptional.isPresent())
            return ResponseEntity.notFound().build();
/*
        if(productRepository.existsByArticleNumber(product.getArticleNumber())){
            return new ResponseEntity(new ApiResponse(false, "Article number is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
*/
        System.err.println(productRequest.getName());
        System.err.println(productRequest.getArticleNumber());
        System.err.println(productRequest.getCategory());
        System.err.println(productRequest.getPrice());

        Product product = new Product(
                productRequest.getName(),
                productRequest.getArticleNumber(),
                productRequest.getPrice()
        );

        product.setId(id);

        product.setCategory(productRequest.getCategory());

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

        if(!productCategoryRepository.existsByCategoryName(productRequest.getCategory().getCategoryName()) && productCategoryRepository.existsById(productRequest.getCategory().getId())){
            return new ResponseEntity(new ApiResponse(false, "Category error!"),
                    HttpStatus.BAD_REQUEST);
        }

        Optional<ProductCategories> optionalProductCategoriy = productCategoryRepository.findById(productRequest.getCategory().getId());
        if(!optionalProductCategoriy.isPresent()){
            /*
                    fortsätt här sedan max
                    Error om man inte hittar category?
             */
            return new ResponseEntity(new ApiResponse(false, "Category error!"),
                    HttpStatus.BAD_REQUEST);
        }

        Product product = new Product(productRequest.getName(), productRequest.getArticleNumber(), productRequest.getPrice());

        System.err.println(productRequest.getCategory().getCategoryName());

        System.err.println(productRequest.getCategory().getCategoryName());
        product.setCategory(optionalProductCategoriy.get());

        System.err.println(productRequest.getCategory().getCategoryName());
        Product savedProduct = productRepository.save(product);
        System.err.println(productRequest.getCategory().getCategoryName());
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/products/{product}")
                .buildAndExpand(savedProduct.getName()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Product registered successfully"));
    }
}