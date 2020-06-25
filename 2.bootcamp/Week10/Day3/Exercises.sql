-- 1. Write a query to select all the columns from the table “costumer” in the
-- database named dvdrental.

SELECT * FROM customer;

-- 2. Write a query to display the names (first_name, last_name) using an alias
-- name full name.

SELECT first_name || ' ' || last_name as full_name FROM customer;

-- 3. You want to know every date where one or several accounts were created.
-- Write a query to select the dates of creation from the customer table, it should
-- not have duplicates.

SELECT DISTINCT create_date from customer ;

-- 4. Write a query to get the details of all customers from the customer table in
-- descending order by their first name.

SELECT * FROM customer ORDER BY first_name DESC;

-- 5. Write a query to get the film ID, title, description, year of release and rental
-- rate in ascending order according to their rental rate.

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

-- 6. Write a query to get the address, the district and the phone number from
-- the customers leaving in the district Texas in the address table.

SELECT address, district, phone FROM address WHERE district = 'Texas';

-- 7. Write a query to retrieve the details of the movies with the id 15 and 150.

-- SELECT * FROM film WHERE film_id BETWEEN 15 and 150;
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;
SELECT * FROM film WHERE film_id IN (15,150);

-- 8. Pick your favourite movie. Write a query to see if the rental shop owns it.
-- Write a query to get the film ID, the title, the description, the length and the
-- rental rate from the film table for your movie title.

SELECT film_id, title, description, length, rental_rate FROM film 
WHERE title = 'Inception';

-- 9. Didn’t find it ? Maybe you made a mistake in the name. Write a query to get
-- the film ID, the title, the description, the length and the rental rate from the film
-- table for all the movies starting with the two first letters of your movie.

SELECT film_id, title, description, length, rental_rate FROM film 
WHERE title LIKE 'In%';

-- 10. You want to have a choice between ten propositions of movies and you
-- want the cheapest ones. Write a query to find the 10th cheapest movies.

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 ;

-- 11. You are not satisfied with the results. Write a query to find the 10th next
-- cheapest movies. Try to not use LIMIT.

SELECT * FROM film 
ORDER BY rental_rate ASC OFFSET 10 ROWS FETCH FIRST 10 ROW ONLY; 

SELECT * FROM film 
ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;

-- BONUS. Classify. How can you produce a list of movies, with each labelled as
-- 'cheap' or 'expensive' depending on if their rental rate is more than 2nis? Return 2
-- columns: the title and the rental rate as “cost” of the movies in question.

SELECT title,
	CASE when (rental_rate > 2) then 'expensive'
	ELSE 'cheap'
	END as cost
FROM film;

-- 12. Write a query to join the data of the customer table and the payment table. 
-- You want to get the amount and the date of every payment made by a customer, ordered by his id (from 1 to…).

select p.amount, p.payment_date, p.customer_id, c.first_name, c.email
from customer c
inner join payment p on c.customer_id = p.customer_id
order by p.payment_id;

-- 13. You want to be assured of the performance of your sellers.
-- Write a query to get the customer’s id, names (first and last), 
-- the amount and the date of payment ordered by the id of the staff who sold them the dvd.

select c.customer_id, c.first_name, c.last_name, amount, payment_date, s.staff_id
from customer c
inner join payment p on c.customer_id = p.customer_id
inner join staff s on p.staff_id = s.staff_id
order by staff_id;

-- 14. You need to check your inventory.
-- Write a query to get all the movies which are not in the inventory.

SELECT film.film_id, film.title, inventory_id
FROM film
LEFT JOIN inventory ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL;

-- 15. Write a query to find which city is in which country.

select ci.city, ci.country_id, co.country
from city ci
left join country co on co.country_id = ci.country_id;


