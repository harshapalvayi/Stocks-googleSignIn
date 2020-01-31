create table users (
 id BIGINT PRIMARY KEY  NOT NULL,
 name VARCHAR(255),
 email VARCHAR(50),
 imageUrl varchar(255),
 emailVerified BOOLEAN NOT NULL,
 password VARCHAR(50),
 providerId VARCHAR(255)
);


ALTER TABLE users ALTER COLUMN emailVerified
SET DEFAULT FALSE;