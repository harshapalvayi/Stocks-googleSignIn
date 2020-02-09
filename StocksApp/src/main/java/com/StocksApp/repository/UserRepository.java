package com.StocksApp.repository;

import com.StocksApp.models.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends CrudRepository<Users, Long> {

    boolean existsByUsername(String username);

    Users findByUsername(String username);

    @Transactional
    void deleteByUsername(String username);
}
