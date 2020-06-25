<!-- Exercise 1
Create a database named public and two tables : items and customers.
Read first the exercise to determine which columns to add in the tables. -->

CREATE TABLE items(
	item_id serial primary key,
	item varchar,
	price integer
);

CREATE TABLE customers(
	customer_id serial primary key,
	first_name varchar,
	last_name varchar
);

<!-- Add the following new items to the public.items table: -->

insert into items (item,price)
values 
	('Small Desk','100'),
	('Large Desk','300'),
	('Fan','80');

<!-- Add 5 new customers to the public.customers table: -->

insert into customers (first_name,last_name)
values 
	('Greg','Jones'),
	('Sandra','Jones'),
	('Scott','Scott'),
	('Trevor','Green'),
	('Melanie','Melanie');

<!-- Use SQL to get the following data from the database: -->
<!-- All the items -->
select * from items;
<!-- All the items with a price above 80 -->
select * from items where price > 80;
<!-- All the items with a price below 30 -->
select * from items where price < 80;
<!-- All the customers with the last name ‘Smith’ -->
select * from customers where last_name = 'Smith';
<!-- All the customers with a first name that is not ‘Craig’ -->
select * from customers where first_name = 'Craig';
