DROP DATABASE IF EXISTS herois;
CREATE DATABASE IF NOT EXISTS herois;
USE herois;

CREATE TABLE IF NOT EXISTS universo(
	universo_id INT NOT NULL AUTO_INCREMENT,
  	universo VARCHAR(30) NOT NULL,
  	CONSTRAINT PRIMARY KEY (universo_id)
);

CREATE TABLE IF NOT EXISTS liga(
	liga_id INT NOT NULL AUTO_INCREMENT,
  	liga VARCHAR(30) NOT NULL,
  	universo_id INT NOT NULL,
  	CONSTRAINT PRIMARY KEY (liga_id),
  	CONSTRAINT FOREIGN KEY (universo_id) REFERENCES universo(universo_id)
);

CREATE TABLE IF NOT EXISTS criador(
	criador_id INT NOT NULL AUTO_INCREMENT,
  	criador_nome VARCHAR(30),
  	criador_idade INT,
  	CONSTRAINT PRIMARY KEY (criador_id)
);

CREATE TABLE IF NOT EXISTS heroi(
	heroi_id INT NOT NULL AUTO_INCREMENT,
  	heroi_nome VARCHAR(30),
  	criador_id INT NOT NULL,
  	liga_id INT NOT NULL,
  	CONSTRAINT PRIMARY KEY (heroi_id),
  	CONSTRAINT FOREIGN KEY (criador_id) REFERENCES criador(criador_id),
  	CONSTRAINT FOREIGN KEY (liga_id) REFERENCES liga(liga_id)
);