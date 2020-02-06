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


create table users (
 id BIGINT  PRIMARY KEY NOT NULL,
 user_id VARCHAR(255) NOT NULL,
 username VARCHAR(255),
 email VARCHAR(50),
 isEnabled BOOLEAN NOT NULL,
 isAccountNonLocked BOOLEAN NOT NULL,
 isAccountNonExpired BOOLEAN NOT NULL,
 isCredentialsNonExpired BOOLEAN NOT NULL,
 password VARCHAR(50)
);


ALTER TABLE users ALTER COLUMN isEnabled
SET DEFAULT FALSE;

ALTER TABLE users ALTER COLUMN isAccountNonLocked
SET DEFAULT FALSE;
ALTER TABLE users ALTER COLUMN isAccountNonExpired
SET DEFAULT FALSE;
ALTER TABLE users ALTER COLUMN isCredentialsNonExpired
SET DEFAULT FALSE;