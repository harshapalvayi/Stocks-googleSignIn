package com.StocksApp.StocksApp.controllers;

import com.StocksApp.StocksApp.models.Users;
import com.StocksApp.StocksApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    UserRepository userRepository;


    @PostMapping(value = "/save")
    public void postCustomer(@RequestBody Users user) {
        userRepository.save(new Users(user.getFirstName(), user.getLastName()));
    }


    @GetMapping("/users")
    public List<Users> getAllUsers() {
        System.out.println("all users...");
        List<Users> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @GetMapping("/user")
    public String getUser(@RequestParam("firstname") String firstName) {
        System.out.println(" user name...");
        String userName = "";
        for(Users user: userRepository.findByFirstName(firstName)) {
            userName = user.toString();
        }
        return userName;
    }
}
