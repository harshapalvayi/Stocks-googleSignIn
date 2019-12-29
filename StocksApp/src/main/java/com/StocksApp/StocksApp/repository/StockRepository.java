package com.StocksApp.StocksApp.repository;

import com.StocksApp.StocksApp.models.Stocks;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface StockRepository extends CrudRepository<Stocks, Long> {
     Stocks findBySymbol(String symbol);
     List<Stocks> findAllBy();

     @Query(value = "SELECT sum(price * shares) FROM Stocks")
     public double total();
}