USE sakila;

SELECT first_name FROM customer
WHERE store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost, rating FROM film
WHERE rating = 'PG' OR rating = 'G' OR rating = 'PG-13' AND replacement_cost > 18
ORDER BY replacement_cost DESC
LIMIT 100;

SELECT * FROM customer
WHERE store_id = 1 AND active IS FALSE;

SELECT * FROM film
WHERE rating = 'R' OR rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;

SELECT * FROM film 
WHERE title LIKE '%ace%';

SELECT `description` FROM film 
WHERE `description` LIKE '%china';

SELECT * FROM film 
WHERE `description` LIKE '%girl%' AND title LIKE '%lord'
LIMIT 2;

SELECT * FROM film 
WHERE title LIKE '___gon%'
LIMIT 2;

SELECT * FROM film 
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT * FROM film 
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM film 
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;

SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) BETWEEN '2005/05/01' AND '2005/08/01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM film
WHERE rating IN ('PG', 'G', 'PG-13')
ORDER BY title
LIMIT 500;

SELECT COUNT(*) FROM payment
WHERE payment_date LIKE '2005-05-25%';

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT 
DATE(payment_date) AS DATA,
YEAR(payment_date) AS ANO,
MONTH(payment_date) AS MÊS,
DAY(payment_date) AS DIA,
HOUR(payment_date) AS HORA,
MINUTE(payment_date) AS MINUTO,
SECOND(payment_date) AS SEGUNDO
FROM payment WHERE rental_id = 10330;

SELECT name FROM Pecas
WHERE name LIKE 'GR%';

SELECT * FROM Fornecimentos
WHERE peca = 1
ORDER BY Fornecedor;

SELECT peca, Fornecedor, Preco FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY peca;

SELECT UCASE('trybe');

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

SELECT CHAR_LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13 ,10);

SELECT 
    title,
    film_id,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti a esse filme',
        'Não conheço o filme') AS `conheço o filme?`
FROM film;

SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público-alvo' 		
FROM film;

SELECT IF(23 MOD 2 = 0 ,'Par', 'Ìmpar') AS 'Par Ou Ímpar';

SELECT ROUND(RAND() * (20 - 15 + 1) + 15);

SELECT 
	AVG(rental_duration) AS `Média de Duração`,
	MIN(rental_duration) AS `Duração Mínima`,
  MAX(rental_duration) AS `Duração Máxima`,
  SUM(rental_duration) AS `Tempo de Exibição Total`,
  COUNT(rental_duration) AS `Filmes Registrados`
FROM film;

SELECT 
    act.first_name, act.actor_id, film.film_id
FROM
    sakila.actor AS `act`
        INNER JOIN
    sakila.film_actor AS `film` ON act.actor_id = film.actor_id;

SELECT 
    S.first_name, S.last_name, A.address
FROM
    sakila.staff AS `S`
        INNER JOIN
    sakila.address AS `A` ON S.address_id = A.address_id;

SELECT 
    C.customer_id,
    C.first_name,
    C.email,
    A.address_id,
    A.district,
    A.address
FROM
    sakila.customer AS `C`
        INNER JOIN
    sakila.address AS `A` ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

SELECT 
    C.first_name, C.email, C.address_id, A.district
FROM
    sakila.customer AS `C`
        INNER JOIN
    sakila.address AS `A` ON C.address_id = A.address_id
        AND A.district = 'California'
        AND C.first_name LIKE '%rene%';

SELECT 
    C.first_name, COUNT(A.address)
FROM
    sakila.customer AS `C`
        INNER JOIN
    sakila.address AS `A` ON C.address_id = A.address_id
        AND C.active = 1
GROUP BY C.customer_id
ORDER BY C.first_name DESC , C.last_name DESC;
