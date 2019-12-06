package com.StocksApp.StocksApp.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "stocks")
public class Stocks implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "stock_symbol")
    private String stockSymbol;

    @Column(name = "stock_name")
    private String stockName;

    @Column(name = "stock_price")
    private int stockPrice;

    @Column(name = "shares")
    private int shares;

    @Column(name = "stock_dividend")
    private int stockDividend;


    protected Stocks() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStockSymbol() {
        return stockSymbol;
    }

    public void setStockSymbol(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public int getStockPrice() {
        return stockPrice;
    }

    public void setStockPrice(int stockPrice) {
        this.stockPrice = stockPrice;
    }

    public int getStockDividend() {
        return stockDividend;
    }

    public void setStockDividend(int stockDividend) {
        this.stockDividend = stockDividend;
    }

    public int getShares() {
        return shares;
    }

    public void setShares(int shares) {
        this.shares = shares;
    }

    public Stocks(String stockSymbol, String stockName, int stockPrice, int stockDividend, int shares) {
        this.stockSymbol = stockSymbol;
        this.stockName = stockName;
        this.stockPrice = stockPrice;
        this.stockDividend = stockDividend;
        this.shares = shares;
    }
}
