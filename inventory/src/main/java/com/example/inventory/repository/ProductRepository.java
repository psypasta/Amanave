package com.example.inventory.repository;

import com.example.inventory.model.Product;
import com.example.inventory.model.Role;
import com.example.inventory.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Boolean existsByArticleNumber(String articleNumber);

    Boolean existsByName(String name);

   // @Override
   // List<Product> findAllById(Iterable<Long> iterable);

    //List<Product> findByIdIn(Collection<Long> ids);

    Optional<Product> findById(Long id);

    Optional<Product> findByArticleNumber(String articleNumber);
}
