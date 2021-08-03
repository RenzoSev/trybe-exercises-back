DROP DATABASE IF EXISTS residencias;
CREATE DATABASE IF NOT EXISTS residencias;
USE residencias;

CREATE TABLE IF NOT EXISTS estado(
	estado_id CHAR(2) NOT NULL,
  	estado VARCHAR(20) NOT NULL,
  	CONSTRAINT PRIMARY KEY (estado_id)
);

CREATE TABLE IF NOT EXISTS cidade(
	cidade_id INT NOT NULL AUTO_INCREMENT,
  	cidade VARCHAR(30),
  	CONSTRAINT PRIMARY KEY (cidade_id)
);

CREATE TABLE IF NOT EXISTS endereco_residencia(
	endereco_residencia_id INT NOT NULL AUTO_INCREMENT,
  	rua VARCHAR (50),
  	numero_casa INT,
  	cidade_id INT,
  	estado_id CHAR(2),
  	CONSTRAINT PRIMARY KEY (endereco_residencia_id),
  	CONSTRAINT FOREIGN KEY (cidade_id) REFERENCES cidade(cidade_id),
  	CONSTRAINT FOREIGN KEY (estado_id) REFERENCES estado(estado_id)
);

CREATE TABLE IF NOT EXISTS tipo_residencia(
	tipo_residencia_id INT NOT NULL AUTO_INCREMENT,
  	tipo_residencia VARCHAR (10),
  	CONSTRAINT PRIMARY KEY (tipo_residencia_id)
);

CREATE TABLE IF NOT EXISTS residencia (
	residencia_id INT NOT NULL AUTO_INCREMENT,
  	residencia_locador VARCHAR(20),
  	tipo_residencia_id INT NOT NULL,
  	endereco_residencia_id INT NOT NULL,
  	CONSTRAINT PRIMARY KEY (residencia_id),
  	CONSTRAINT FOREIGN KEY (tipo_residencia_id) REFERENCES tipo_residencia(tipo_residencia_id),
  	CONSTRAINT FOREIGN KEY (endereco_residencia_id) REFERENCES endereco_residencia(endereco_residencia_id)
);

CREATE TABLE IF NOT EXISTS inquilino(
	inquilino_id INT NOT NULL AUTO_INCREMENT,
  	inquilino_name VARCHAR(20),
  	residencia_id INT NOT NULL,
  	CONSTRAINT PRIMARY KEY (inquilino_id),
  	CONSTRAINT FOREIGN KEY (residencia_id) REFERENCES residencia(residencia_id)
);