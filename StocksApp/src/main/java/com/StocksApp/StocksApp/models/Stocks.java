package com.StocksApp.StocksApp.models;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "stocks")
public class Stocks implements Serializable {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "entity_id_seq"
    )
    @SequenceGenerator(
            name = "entity_id_seq",
            sequenceName = "global_id_sequence",
            allocationSize = 1
    )
    @Column(
            name = "id",
            unique = true,
            updatable = false,
            nullable = false
    )
    private long id;

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "avg_price")
    private BigDecimal avg_price;

    @Column(name = "dividend")
    private BigDecimal dividend;

    @Column(name = "shares")
    private int shares;

    public Stocks() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public BigDecimal getDividend() {
        return dividend;
    }

    public BigDecimal getAvg_price() {
        return avg_price;
    }

    public void setAvg_price(BigDecimal avg_price) {
        this.avg_price = avg_price;
    }

    public void setDividend(BigDecimal dividend) {
        this.dividend = dividend;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getShares() {
        return shares;
    }

    public void setShares(int shares) {
        this.shares = shares;
    }

    public Stocks(String stockSymbol, String stockName, BigDecimal stockPrice, BigDecimal avg_price, BigDecimal dividend, int shares) {
        this.symbol = stockSymbol;
        this.name = stockName;
        this.price = stockPrice;
        this.avg_price = avg_price;
        this.dividend = dividend;
        this.shares = shares;
    }
}
