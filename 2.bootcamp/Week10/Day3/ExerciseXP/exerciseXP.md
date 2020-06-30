<!-- Exercise 1
1. ‘lea Dupont’ was inserted wrong. Update her first_name to uppercase. -->
update student
set first_name = 'Lea'
where first_name = 'lea' AND last_name = 'Dupont'

<!-- 2. ‘Lea Dupont’ and ‘Marc Dupont’ are twins, they should have the same birth_date. Update both their birth_date to 02/11/1998 -->
update student
set birth_date = '1998-11-02'
where id in (1,5)

<!-- 3. Delete the record where “Lea” is the first_name and ‘Dupont’ is the last_name -->
delete from student
where first_name = 'Lea' AND last_name = 'Dupont'

<!-- Count how many students are in the table -->
select count(distinct id) from student

<!-- Count how many students were born after 1/01/2000 -->
select count(distinct id) from student
where birth_date > '2000-01-01'

<!-- Add a column to the table student, called math_grade -->
alter table student
add column math_grade integer;

<!-- Add the grade 80 to the student which id is 1 -->
update student
set math_grade = 80
where id = 1

<!-- Add the grade 90 to the students which id are 2 and 4 -->
update student
set math_grade = 90
where id in (2,4);

<!-- Add the grade 100 to the student which id is 6 -->
update student
set math_grade = 100
where id = 6;

<!-- Count how many students have a grade bigger than 83 -->
select count(distinct id) from student
where math_grade > 83;

<!-- Add another student named Omer Simpson with the same birth_date (as the one already in the table). Give him the grade 70 -->
insert into student (first_name, last_name, birth_date, math_grade)
values
    ('Omer','Simpson','1980-03-10',70)

<!-- Count how many grades have each student (depending on their first and last name). Use an alias called total_grade to fetch the grades. (Omer Simpson should have 2 grades). Hint : use GROUP BY -->
select first_name, last_name, count(math_grade) AS total_grade
from student
group by first_name, last_name
order by total_grade DESC

<!-- Do the sum of the grades of all the students -->
select sum(math_grade) AS sum_grade
from student;

<!-- Exercise 2 -->
<!-- Use SQL to get the following from the database:
All items, ordered by price (lowest to highest) -->
select * from items
order by price

<!-- Items with a price above 80, ordered by price (highest to lowest) -->
select * from items
where price > 80
order by price DESC

<!-- The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results. -->
select first_name,last_name
from customers
order by last_name ASC, first_name ASC
limit 3

<!-- The last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results. -->
select first_name,last_name
from customers
order by last_name ASC, first_name ASC
limit 2 offset 3

<!-- All last names (no other columns!), in reverse alphabetical order (Z-A) -->
select last_name
from customers
order by last_name DESC

<!-- Create a table named purchases. It should have 2 columns : custumer_id and item_id. These columns are references from the tables customers and items
Edit the data of the purchases table: -->
create table purchases(
    customer_id integer REFERENCES customers(customer_id),
    item_id integer REFERENCES items(item_id)
);

<!-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
Add 5 rows which reference existing customers and items. -->

