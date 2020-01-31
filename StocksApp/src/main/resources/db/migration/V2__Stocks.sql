create table stocks (
 id BIGINT  PRIMARY KEY NOT NULL,
 user_id VARCHAR(255) NOT NULL,
 symbol VARCHAR(5),
 name VARCHAR(255),
 price DECIMAL NULL,
 shares INT NULL,
 avg_price DECIMAL NULL,
 dividend DECIMAL NULL,
 pay_date TIMESTAMP,
 ex_date  TIMESTAMP,
 UNIQUE (id, symbol)
);
