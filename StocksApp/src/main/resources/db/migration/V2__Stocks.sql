create table stocks (
 id BIGINT  PRIMARY KEY NOT NULL,
 symbol VARCHAR(5),
 name VARCHAR(255),
 price DECIMAL NULL,
 shares INT NULL,
 UNIQUE (id, symbol)
);
