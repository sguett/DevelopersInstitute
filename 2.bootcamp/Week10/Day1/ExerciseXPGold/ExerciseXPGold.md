<!-- INSERT -->
<!-- 
Create a database named bootcamp
Create a table student
Add the columns: id, last_name, first_name, birth_date. The id has to be auto_incremented -->

CREATE TABLE student(
	id serial primary key,
	last_name varchar,
	first_name varchar,
	birth_date timestamp
);

<!-- Insert these data (find a way to make it quick). You have to reproduce exactly this table (also with the errors you see)
 -->
insert into student (first_name,last_name,birth_date)
values 
	('Marc','Dupont','1998-11-02'),
	('Yoan','Durant','2010-03-12'),
	('Lea','Martin','1987-07-24'),
	('Sarah','Benichou','1996-04-07'),
	('lea','Dupont','2003-06-14'),
	('Omer','Simpson','1980-03-10');

<!-- Insert  in the table : your last_name, first_name and birth_date -->

insert into student (first_name,last_name,birth_date)
values 
	('Samuel','Guetta','1988-07-25');

<!-- Insert in the table, two more students. Be careful, you have to add them at the same time (with one request). -->

insert into student (first_name,last_name,birth_date)
values 
	('Simon','Joseph','1990-07-19'),
    ('Jordan','Levi','1985-09-20');

<!-- SELECT -->
<!-- Fetch all the data from the table -->
select * from student;
<!-- Fetch all the students first_name and last_name -->
select first_name, last_name from student;
<!-- Fetch only the student where the id is equal to 2 (show his first_name and last_name) -->
select first_name, last_name from student where id = 2;
<!-- Fetch only the student where the last_name is equal to Dupont AND the first_name is equal to Marc (show his first_name and last_name) -->
select first_name, last_name from student 
where last_name = 'Dupont' and first_name = 'Marc' ;
<!-- Fetch only the students where the last_name is equal to Dupont OR the first_name is equal to Marc. (show their first_name and last_name) -->
select first_name, last_name from student 
where last_name = 'Dupont' or first_name = 'Marc' ;
<!-- Fetch the students which first_name contains the letter a. (show their first_name and last_name) -->
select first_name, last_name from student 
where first_name like '%a%' ;
<!-- Fetch the students which first_name starts with the letter a. (show their first_name and last_name) -->
select first_name, last_name from student 
where first_name like 'a%' ;
<!-- Fetch the students which first_name ends with the letter a. (show their first_name and last_name) -->
select first_name, last_name from student 
where first_name like '%a' ;
<!-- Fetch the students where the second to last letter of the first name is a (Example: Leah). (show their first_name and last_name) -->
select first_name, last_name from student 
where first_name like '%a_' ;
<!-- Fetch the students which the id are 1 AND 3. (show their first_name and last_name) -->
select first_name, last_name from student 
where id in (1,3);
<!-- Fetch the students, which birth_date is equal or after the 1/01/2000. (show their first_name and last_name and birthdate) -->
select first_name, last_name, birth_date from student 
where birth_date >= '2000-01-01';
