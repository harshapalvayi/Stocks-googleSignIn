package com.StocksApp.StocksApp.repository;

import com.StocksApp.StocksApp.models.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Users, Long> {

}
