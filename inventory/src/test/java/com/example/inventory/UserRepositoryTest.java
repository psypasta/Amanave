package com.example.inventory;

import com.example.inventory.model.User;
import com.example.inventory.repository.UserRepository;
import org.junit.*;
import org.junit.runner.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.*;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository repository;

    @Test
    public void testCreateUser() throws Exception {
        this.entityManager.persist(new User("name", "username", "email@gmail.com", "password"));
        Optional<User> user = this.repository.findByUsername("username");
        assertThat(user.get().getUsername()).isEqualTo("username");
    }

}