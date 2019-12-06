create table stocks (
 id BIGINT PRIMARY KEY  NOT NULL,
 stock_symbol VARCHAR(5),
 stock_name VARCHAR(255),
 stock_price INT NULL,
 shares INT NULL,
 stock_dividend INT NULL
);
