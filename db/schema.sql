USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(45),
  ceratedAt TIMESTAMP NOT NULL,
  devoured BOOLEAN DEFAULT false
);
