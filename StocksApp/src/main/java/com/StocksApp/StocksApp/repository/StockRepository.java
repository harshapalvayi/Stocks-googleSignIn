package com.StocksApp.StocksApp.repository;

import com.StocksApp.StocksApp.models.Stocks;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockRepository extends CrudRepository<Stocks, Long> {
    List<Stocks> findByStockName(String stockName);
}