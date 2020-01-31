package com.StocksApp.StocksApp.controllers;

import com.StocksApp.StocksApp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin()
@RestController
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

}
