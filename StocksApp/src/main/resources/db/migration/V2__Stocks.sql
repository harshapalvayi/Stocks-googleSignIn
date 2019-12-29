create table stocks (
 id BIGINT  PRIMARY KEY NOT NULL,
 symbol VARCHAR(5),
 name VARCHAR(255),
 price DECIMAL NULL,
 shares INT NULL,
 avg_price DECIMAL NULL,
 dividend DECIMAL NULL,
 UNIQUE (id, symbol)
);
