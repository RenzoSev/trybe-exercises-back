USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'Gr%';
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;
SELECT 
peca AS 'Peça', 
Preco as 'Preço', 
Fornecedor 
FROM Fornecimentos
WHERE Fornecedor LIKE '%n%';
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';
SELECT peca FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;
SELECT COUNT(*) FROM Vendas
WHERE order_date BETWEEN '2018-04-15 00:00:00' AND '2019-07-30 23:59:59';