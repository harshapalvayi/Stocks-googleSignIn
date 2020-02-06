package com.StocksApp.controllers;

import com.StocksApp.models.Stocks;
import com.StocksApp.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
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
        String user_id = stockData.getUser_id();
        String ticker = stockData.getSymbol().toUpperCase();
        String name = this.getStockData(ticker).getName();
        BigDecimal price = this.getStockData(ticker).getQuote().getPrice();
        BigDecimal dividend = this.getStockData(ticker).getDividend().getAnnualYield();
        Calendar payDate = this.getStockData(ticker).getDividend().getPayDate();
        Calendar exDate = this.getStockData(ticker).getDividend().getExDate();
        curr.setUser_id(user_id);
        curr.setSymbol(ticker);
        curr.setName(name);
        curr.setPrice(price);
        curr.setDividend(dividend);
        if (payDate != null) {
            curr.setPay_date(payDate.getTime());
        }
        if (exDate != null) {
            curr.setEx_date(exDate.getTime());
        }
        curr.setAvg_price(stockData.getAvg_price());
        curr.setShares(stockData.getShares());
        if (curr.getEquity() != null) {
            curr.setEquity(curr.getEquity());
        }
        if (curr.getCost() != null) {
            curr.setCost(curr.getCost());
        }
        Stocks st = stockRepository.findBySymbol(ticker);
        if (st != null) {
            curr.setId(st.getId());
            curr.setUser_id(user_id);
            curr.setSymbol(ticker);
            curr.setAvg_price(stockData.getAvg_price());
            if (st.getShares() > 0) {
                curr.setShares(stockData.getShares() + st.getShares());
            } else {
                curr.setShares(stockData.getShares());
            }
        }
       return stockRepository.save(curr);
    }

    @PostMapping(value = "/edit")
    public Stocks editStocks(@RequestBody Stocks stockData) {
        Stocks curr = new Stocks();
        Stocks st = stockRepository.findBySymbol(stockData.getSymbol());
        if (st!= null) {
            curr.setId(stockData.getId());
            curr.setUser_id(stockData.getUser_id());
            curr.setSymbol(stockData.getSymbol());
            curr.setName(stockData.getName());
            curr.setPrice(stockData.getPrice());
            curr.setAvg_price(stockData.getAvg_price());
            curr.setShares(stockData.getShares());
            curr.setEquity(stockData.getEquity());
            curr.setCost(stockData.getCost());
            if (stockData.getDividend() != null) {
                curr.setDividend(stockData.getDividend());
            }
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

    @GetMapping(value = "/delete/{id}")
    public void deleteStock(@PathVariable long id) {
        stockRepository.findById(id);
    }

    @GetMapping(value = "/ticker/{ticker}")
    public String getStockName(@PathVariable String ticker) {
        return this.getStockData(ticker).getName();
    }

    @GetMapping(value = "/all/{userId}")
    public List<Stocks> getAllStocks(@PathVariable String userId) {
        return stockRepository.findByUserId(userId);
    }

    @GetMapping(value = "/total")
    public double getTotal() {
        return stockRepository.total();
    }

    @GetMapping(value = "/dividend/{startDate}/{endDate}")
    public List<Stocks> getDividend(@PathVariable String startDate, @PathVariable String endDate) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date start = sdf.parse(startDate);
        Date end = sdf.parse(endDate);
        return stockRepository.dividends(start, end);
    }
}
