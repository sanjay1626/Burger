DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE p0hcejlyusy9rjsa;

USE p0hcejlyusy9rjsa;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);