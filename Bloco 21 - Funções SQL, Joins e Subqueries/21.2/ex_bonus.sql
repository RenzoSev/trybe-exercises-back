SELECT * FROM Movies as m
JOIN BoxOffice AS bo
ON bo.movie_id = m.id 
AND bo.rating > 8;

SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes 
FROM Movies AS m1, Movies AS m2
WHERE m1.director = m2.director 
AND m1.title <> m2.title;

-- subquery
SELECT title FROM Movies AS m
WHERE EXISTS (
	SELECT * FROM BoxOffice
  	WHERE movie_id = m.id 
  	AND international_sales > 500000000
)
AND length_minutes > 110; 

-- subquery 2
SELECT title FROM Movies AS m
WHERE m.id IN (
	SELECT movie_id FROM BoxOffice
  	WHERE international_sales > 500000000
)
AND length_minutes > 110;

-- inner join
SELECT title FROM Movies as m
JOIN BoxOffice AS bo
ON bo.movie_id = m.id
AND bo.international_sales > 500000000 
AND m.length_minutes > 110;