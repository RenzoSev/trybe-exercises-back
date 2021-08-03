SELECT m.title, bo.domestic_sales, bo.international_sales 
FROM Movies AS m
JOIN BoxOffice AS bo
ON m.id = bo.movie_id;

SELECT m.title, bo.domestic_sales, bo.international_sales
FROM Movies AS m
JOIN BoxOffice AS bo
ON m.id = bo.movie_id 
AND bo.international_sales > bo.domestic_sales;

SELECT m.title, bo.rating
FROM Movies AS m
JOIN BoxOffice AS bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

SELECT * 
FROM Theater AS t
LEFT JOIN Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;

SELECT * 
FROM Theater AS t
RIGHT JOIN Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;

-- subquery
SELECT title FROM Movies AS m
WHERE EXISTS (
	SELECT * FROM BoxOffice
  	WHERE BoxOffice.movie_id = m.id 
  	AND rating > 7.5
);

-- inner join
SELECT title FROM Movies AS m
JOIN BoxOffice AS bo
ON bo.movie_id = m.id
WHERE bo.rating > 7.5;

-- subquery
SELECT rating FROM BoxOffice AS bo
WHERE movie_id IN (
	SELECT id
  	FROM Movies
  	WHERE year > 2009
);

-- inner join
SELECT rating FROM BoxOffice AS bo
JOIN Movies as m
ON m.id = bo.movie_id
AND m.year > 2009;

SELECT name FROM Theater as t
WHERE EXISTS (
	SELECT * FROM Movies
  	WHERE theater_id = t.id
);

SELECT name FROM Theater as t
WHERE NOT EXISTS (
	SELECT * FROM Movies
  	WHERE theater_id = t.id
);