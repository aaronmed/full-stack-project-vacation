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
datePublished date,
priceByNight float,
numGuest tinyint,
numBathroom tinyint,
numBedroom tinyint,
numBeds tinyint,
idHostUser bigint,

PRIMARY KEY (id),
FOREIGN KEY (idHostUser) REFERENCES user (id)
);

CREATE TABLE book (
id bigint AUTO_INCREMENT,
idUser bigint,
idAdvert bigint,
startDate date,
endDate date,

PRIMARY KEY (id),
FOREIGN KEY (idUser) REFERENCES user (id),
FOREIGN KEY (idAdvert) REFERENCES advert (id)
);

CREATE TABLE reviews (
id bigint AUTO_INCREMENT,
description varchar(100),
starts tinyint,
reviewDate datetime,
idAdvert bigint,

FOREIGN KEY (idAdvert) REFERENCES advert (id),
PRIMARY KEY (id)
);
