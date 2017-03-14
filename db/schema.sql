CREATE DATABASE game_db;
USE game_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE scores
(
	id int NOT NULL AUTO_INCREMENT,
	total_score INT NOT NULL,
	user_id INT NOT NULL, 
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) references users(id)
);