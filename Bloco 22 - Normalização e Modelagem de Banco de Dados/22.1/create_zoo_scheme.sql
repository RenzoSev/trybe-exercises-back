CREATE SCHEMA IF NOT EXISTS zoologico;

CREATE TABLE IF NOT EXISTS animais(
	id_animal INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(30) NOT NULL,
  	especie VARCHAR(30) NOT NULL,
  	sexo CHAR(1) NOT NULL,
  	localizacao VARCHAR(10),
	CONSTRAINT PRIMARY KEY(id_animal)
);

CREATE TABLE IF NOT EXISTS gerentes(
	id_gerente INT NOT NULL AUTO_INCREMENT,
  	nome VARCHAR(30) NOT NULL,
  	age INT,
  	CONSTRAINT PRIMARY KEY(id_gerente)
);

CREATE TABLE IF NOT EXISTS cuidadores(
	id_cuidador INT NOT NULL AUTO_INCREMENT,
  	id_gerente INT NOT NULL,
  	nome VARCHAR(30) NOT NULL,
  	age INT,
  	CONSTRAINT PRIMARY KEY(id_cuidador),
  	FOREIGN KEY(id_gerente) REFERENCES gerentes(id_gerente)
);

CREATE TABLE IF NOT EXISTS cuidados(
	id_animal INT NOT NULL,
  	id_cuidador INT NOT NULL,
  	CONSTRAINT PRIMARY KEY(id_animal, id_cuidador),
  	FOREIGN KEY(id_animal) REFERENCES animais(id_animal),
  	FOREIGN KEY(id_cuidador) REFERENCES cuidadores(id_cuidador)
);

INSERT INTO animais(nome, especie, sexo, localizacao)
VALUES ('Alex', 'Leão', 'M', 'Centro'),
('Glória', 'Hipopótamo', 'F', 'Leste'),
('Melman', 'Girafa', 'M', 'Oeste'),
('Marty', 'Zebra', 'M', 'Norte');

INSERT INTO gerentes(nome, age)
VALUES ('Rafael', 28),
('Sandra', 30),
('Beatriz', 22);

INSERT INTO cuidadores(id_gerente, nome, age)
VALUES(3, 'Marcos', 24),
(3, 'Jéssica', 27),
(1, 'Rafaela', 45),
(1, 'Rodrigo', 36),
(2, 'Jhenifer', 18),
(2, 'Marcelo', 19);

INSERT INTO cuidados(id_animal, id_cuidador)
VALUES(2, 3),
(4, 3),
(4, 2),
(2, 2),
(1, 1),
(1, 2),
(3, 3);