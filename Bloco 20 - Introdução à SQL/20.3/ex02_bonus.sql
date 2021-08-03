USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE '%e%';
SELECT Name AS Nome FROM Projects
WHERE Name LIKE 'A%'
ORDER BY Name;
SELECT Code as 'Código', Name as 'Nome' FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Code;
SELECT Scientist FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');
SELECT * FROM Projects
WHERE Hours > 500;
SELECT * FROM Projects
WHERE Hours BETWEEN 250 AND 800;
SELECT Name AS Nome, Code AS 'Código' FROM Projects
WHERE Name NOT LIKE 'A%';
SELECT Name FROM Projects
WHERE Name LIKE '%h%';