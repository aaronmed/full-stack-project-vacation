DROP DATABASE db_vacations;

CREATE DATABASE db_vacations;

USE db_vacations;

CREATE TABLE user (
id bigint AUTO_INCREMENT,
username varchar(45),
password varchar(45),
name varchar(45),
surname varchar(45),
dni varchar(10),
telephone varchar(10),

PRIMARY KEY (id)
);

CREATE TABLE advert (
id bigint AUTO_INCREMENT,
description varchar(100),
address varchar(45),
published date,
price float,
guests tinyint,
bathrooms tinyint,
bedrooms tinyint,
beds tinyint,
user bigint,

PRIMARY KEY (id),
FOREIGN KEY (user) REFERENCES user (id)
);

CREATE TABLE book (
id bigint AUTO_INCREMENT,
user bigint,
advert bigint,
start date,
end date,

PRIMARY KEY (id),
FOREIGN KEY (user) REFERENCES user (id),
FOREIGN KEY (advert) REFERENCES advert (id)
);

CREATE TABLE reviews (
id bigint AUTO_INCREMENT,
description varchar(100),
starts tinyint,
review datetime,
advert bigint,

FOREIGN KEY (advert) REFERENCES advert (id),
PRIMARY KEY (id)
);
