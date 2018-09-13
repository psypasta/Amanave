package com.example.inventory.controller;

import com.example.inventory.model.User;
import com.example.inventory.payload.UpdateUserRequest;
import com.example.inventory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;



@RestController
@RequestMapping("/users")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("/get")
    public List<User> retrieveAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public User retrieveUser(@PathVariable long id) {
        Optional<User> user = userRepository.findById(id);

     //   if (!user.isPresent())
            // throw new UserNotFoundException("id-" + id);

        return user.get();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable long id) {
        userRepository.deleteById(id);
    }

  //  @CrossOrigin(origins = "http://localhost:5000/users")
    @PutMapping("/update/{id}")
    public ResponseEntity<Object> updateUser(@Valid @RequestBody UpdateUserRequest updateUserRequest, @PathVariable long id) {

        Optional<User> userOptional = userRepository.findById(id);

        if (!userOptional.isPresent())
            return ResponseEntity.notFound().build();

        User user = new User(
                updateUserRequest.getName(),
                updateUserRequest.getUsername(),
                updateUserRequest.getEmail(),
                passwordEncoder.encode(updateUserRequest.getPassword())
        );

        System.err.println(updateUserRequest.getName());
        System.err.println(updateUserRequest.getUsername());
        System.err.println(updateUserRequest.getEmail());
        System.err.println(updateUserRequest.getPassword());

        user.setId(id);
        userRepository.save(user);

        return ResponseEntity.noContent().build();
    }
}