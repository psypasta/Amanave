package com.example.inventory;

import com.example.inventory.model.Product;
import com.example.inventory.model.User;
import com.example.inventory.repository.ProductRepository;
import com.example.inventory.repository.UserRepository;
import org.junit.*;
import org.junit.runner.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.*;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ProductRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProductRepository repository;

    @Test
    public void testCreateProduct() throws Exception {
        this.entityManager.persist(new Product("name", "0000001", new BigDecimal(100)));
        Optional<Product> product = this.repository.findByArticleNumber("0000001");
        assertThat(product.get().getName()).isEqualTo("name");
    }

}