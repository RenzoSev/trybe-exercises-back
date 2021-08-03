USE Pixar;
UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;
UPDATE BoxOffice
SET rating = 6.0
WHERE international_sales < 300000000 
AND domestic_sales > 200000000;
DELETE FROM Movies
WHERE length_minutes < 100;