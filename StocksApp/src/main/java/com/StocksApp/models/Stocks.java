package com.StocksApp.models;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Entity
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
            unique = true,
            nullable = false
    )
    private long id;

    private String user_id;

    private String symbol;

    private String name;

    private BigDecimal price;

    private BigDecimal avg_price;

    private BigDecimal dividend;

    @Temporal(TemporalType.DATE)
    private Date pay_date;

    private Date ex_date;

    private BigDecimal equity;

    private BigDecimal cost;


    private int shares;

    public Stocks() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
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

    public Date getPay_date() {
        return pay_date;
    }

    public void setPay_date(Date pay_date) {
        this.pay_date = pay_date;
    }

    public Date getEx_date() {
        return ex_date;
    }

    public void setEx_date(Date ex_date) {
        this.ex_date = ex_date;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getShares() {
        return shares;
    }

    public BigDecimal getEquity() {
        return equity;
    }

    public void setEquity(BigDecimal equity) {
        BigDecimal price = this.price;
        this.equity  = BigDecimal.valueOf(this.shares).multiply(price);
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        BigDecimal price = this.avg_price;
        this.cost  = BigDecimal.valueOf(this.shares).multiply(price);
    }

    public void setShares(int shares) {
        this.shares = shares;
    }

    public Stocks(String userId, String stockSymbol, String stockName, BigDecimal stockPrice, BigDecimal avg_price,
                  BigDecimal dividend,  Date pay_date, Date ex_date, BigDecimal equity, BigDecimal cost, int shares) {
        this.user_id = userId;
        this.symbol = stockSymbol;
        this.name = stockName;
        this.price = stockPrice;
        this.avg_price = avg_price;
        this.dividend = dividend;
        this.pay_date = pay_date;
        this.ex_date = ex_date;
        this.equity = equity;
        this.cost  = cost;
        this.shares = shares;
    }
}
