package com.StocksApp.StocksApp.controllers;

import com.StocksApp.StocksApp.models.Stocks;
import com.StocksApp.StocksApp.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.quotes.stock.StockDividend;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/stocks")
public class StockController {

    @Autowired
    StockRepository stockRepository;

    @PostMapping(value = "/save")
    public Stocks postStocks(@RequestBody Stocks stockData) {
        Stocks curr = new Stocks();
        String ticker = stockData.getSymbol().toUpperCase();
        String name = this.getStockData(ticker).getName();
        BigDecimal price = this.getStockData(ticker).getQuote().getPrice();
        BigDecimal dividend = this.getStockData(ticker).getDividend().getAnnualYield();
        curr.setSymbol(ticker);
        curr.setName(name);
        curr.setPrice(price);
        curr.setDividend(dividend);
        curr.setAvg_price(stockData.getAvg_price());
        curr.setShares(stockData.getShares());
        Stocks st = stockRepository.findBySymbol(ticker);
        System.out.print("st" + curr.getId() + curr.getSymbol() + curr.getName() + curr.getAvg_price());
        if (st != null) {
            curr.setId(st.getId());
            curr.setSymbol(ticker);
            curr.setAvg_price(stockData.getAvg_price());
            curr.setShares(stockData.getShares());
        }
       return stockRepository.save(curr);
    }

    private Stock getStockData(String quote) {
        try {
            return YahooFinance.get(quote);
        } catch (IOException e) {
            e.printStackTrace();
            return new Stock(quote);
        }
    }

    @GetMapping(value = "/ticker/{ticker}")
    public String getStockName(@PathVariable String ticker) {
        return this.getStockData(ticker).getName();
    }

    @GetMapping(value = "/all")
    public List<Stocks> getAllStocks() {
        return stockRepository.findAllBy();
    }

    @GetMapping(value = "/total")
    public double getTotal() {
        return stockRepository.total();
    }
}
