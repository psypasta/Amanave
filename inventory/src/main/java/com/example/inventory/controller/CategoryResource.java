package com.example.inventory.controller;

import com.example.inventory.model.Product;
import com.example.inventory.model.ProductCategories;
import com.example.inventory.payload.AddProductRequest;
import com.example.inventory.payload.ApiResponse;
import com.example.inventory.repository.ProductCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productcategories")
public class CategoryResource {

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @GetMapping("/get")
    public List<ProductCategories> retrieveAllProduct() {
        return productCategoryRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public ProductCategories retrieveProductCategory(@PathVariable long id) {
        Optional<ProductCategories> productCategoryOptional = productCategoryRepository.findById(id);

        if (!productCategoryOptional.isPresent())
            //throw new UserNotFoundException("id-" + id);
            System.out.println("id-" + id);

        return productCategoryOptional.get();
    }

    @CrossOrigin(origins = "http://localhost:5000/products")
    @DeleteMapping("/delete/{id}")
    public void deleteProductCategory(@PathVariable long id) {
        productCategoryRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:5000/products")
    @PutMapping("/update/{id}")
    public ResponseEntity<Object> updateProductCategory(@RequestBody ProductCategories productCategory, @PathVariable long id) {

        Optional<ProductCategories> productCategoryOptional = productCategoryRepository.findById(id);

        if (!productCategoryOptional.isPresent())
            return ResponseEntity.notFound().build();

        productCategory.setId(id);

        productCategoryRepository.save(productCategory);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createProduct(@RequestBody String categoryName) {

        if(productCategoryRepository.existsByCategoryName(categoryName)) {
            return new ResponseEntity(new ApiResponse(false, "Product name is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        //(String name, String articleNumber, String category, BigDecimal price)
        ProductCategories productCategory = new ProductCategories(categoryName);

        ProductCategories savedProductCategory = productCategoryRepository.save(productCategory);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/products/{username}")
                .buildAndExpand(savedProductCategory.getCategoryName()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "ProductCategory registered successfully"));
    }
}
