package com.example.inventory.repository;

import com.example.inventory.model.ProductCategories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategories, Long> {
    Optional<ProductCategories> findByCategoryName(String categoryName);

    Boolean existsByCategoryName(String categoryName);
}