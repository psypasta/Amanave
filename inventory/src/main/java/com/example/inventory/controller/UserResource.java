package com.example.inventory.controller;

import com.example.inventory.model.User;
import com.example.inventory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> retrieveAllStudents() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User retrieveStudent(@PathVariable long id) {
        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent())
            //throw new UserNotFoundException("id-" + id);
            System.out.println("id-" + id);

        return user.get();
    }

    @DeleteMapping("/users/{id}")
    public void deleteStudent(@PathVariable long id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<Object> updateStudent(@RequestBody User user, @PathVariable long id) {

        Optional<User> studentOptional = userRepository.findById(id);

        if (!studentOptional.isPresent())
            return ResponseEntity.notFound().build();

        user.setId(id);

        userRepository.save(user);

        return ResponseEntity.noContent().build();
    }
}