SET SQL_SAFE_UPDATES= 0;
SET FOREIGN_KEY_CHECKS=0;

USE Pixar;
INSERT INTO Movies (title, director, year, length_minutes)
VALUES 
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis','Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);
UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';
UPDATE Movies
SET title = 'Ratatouille'
WHERE title = 'ratatui';
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);
DELETE FROM Movies
WHERE title = 'WALL-E';
DELETE FROM Movies
WHERE director = 'Andrew Staton';