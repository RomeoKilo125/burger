CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(45),
  devoured BOOLEAN DEFAULT false
);
