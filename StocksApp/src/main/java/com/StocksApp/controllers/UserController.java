package com.StocksApp.controllers;

import com.StocksApp.repository.UserRepository;

import com.StocksApp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/authenticate")
    public String login(@RequestParam String username, @RequestParam String password) throws Exception {
        return userService.signin(username, password);
    }


}
