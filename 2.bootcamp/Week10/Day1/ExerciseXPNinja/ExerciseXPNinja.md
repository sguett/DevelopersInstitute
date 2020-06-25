<!-- Fetch the first four students. You have to order the answer by last_name alphabetically(show their first_name and last_name) -->
select first_name, last_name from student 
order by last_name
fetch first 4 rows only;
<!-- Fetch the birth_date of the youngest student (show his first_name and last_name and birthdate) -->
select first_name, last_name, birth_date from student 
order by birth_date desc
fetch first row only;
<!-- Fetch three students, skipping the first two students. -->
select * from student
offset 2
fetch first 3 row only;
