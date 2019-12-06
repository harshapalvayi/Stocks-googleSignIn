package com.StocksApp.StocksApp.controllers;

import com.StocksApp.StocksApp.models.Stocks;
import com.StocksApp.StocksApp.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class StockController {

    @Autowired
    StockRepository stockRepository;

    @PostMapping(value = "/stocks/save")
    public Stocks postStocks(@RequestBody Stocks stockData) {
       return stockRepository.save(new Stocks(stockData.getStockSymbol(), stockData.getStockName(),
               stockData.getStockPrice(), stockData.getStockDividend(), stockData.getShares()));
    }
}
