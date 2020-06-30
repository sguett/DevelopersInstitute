-- Write a SQL statement to insert a record with your own value into the table countries against each column.
insert into countries (country_id,country_name,region_id)
values ('TU','Tunisia',4);

-- Write a SQL statement to insert one row into the table countries against the column country_id and country_name.
insert into countries (country_id,country_name)
values ('MA','Maroc');

-- Write a SQL statement to create duplicates of countries table named country_new with all structure and data.
create table country_new as
select * from countries;

-- Write a SQL statement to insert NULL values into region_id column for a row of countries table.
UPDATE
  countries
SET
  region_id = NULL
WHERE
  country_id = 'TU';

-- Write a SQL statement to insert 3 rows by a single insert statement.
insert into countries (country_id,country_name,region_id)
values ('MA','Maroc','4'),('AL','Algeria','4'),('GB','Gabon','4');

-- Write a SQL statement insert rows from the country_new table to countries table.
INSERT INTO country_new
SELECT * FROM countries
WHERE region_id = 4;

-- Write a SQL statement to insert one row in the jobs table to ensure that no duplicate values will be entered into the job_id column.
INSERT INTO jobs VALUES(1001,'Product Manager',8000);

-- Write a SQL statement to insert a record into the table countries to ensure that, at country_id and the region_id combination will be entered once in the table.
INSERT INTO countries VALUES('AA','Italy',2);

-- Write a SQL statement to insert rows into the table countries in which the value of country_id column will be unique and auto incremented.
INSERT INTO countries(COUNTRY_NAME,REGION_ID) VALUES('India',185);

-- Update statement
-- Write a SQL statement to change the email column of the employees table with ‘not available’ for all employees.
update employees
set email = 'not available'

-- Write a SQL statement to change the email and commission_pct column of the employees table with ‘not available’ and 0.10 for all employees.
alter table employees alter column commission_pct type decimal;
update employees
set email = 'not available', commission_pct = 0.10;

-- Write a SQL statement to change the email and commission_pct column of the employees table with ‘not available’ and 0.10 for those employees whose department_id is 110.
update employees
set email = 'not available', commission_pct = 0.10
where department_id = 110;

-- Write a SQL statement to change the email column of employees table with ‘not available’ for those employees whose department_id is 80 and gets a commission is less than.20%.
update employees
set email = 'not available'
where department_id = 80 and commission_pct < .20;

-- Write a SQL statement to change the email column of the employees table with ‘not available’ for those employees who belongs to the ‘Accounting’ department.
update employees
set email = 'not available'
from departments
where employees.department_id = departments.department_id and departments.department_name = 'Accounting';

-- Write a SQL statement to change the salary of an employee to 8000 whose ID is 105, if the existing salary is less than 5000.
update employees
set salary = 8000
where employee_id = 105 and salary < 5000;

-- Write a SQL statement to change the job ID of the employee which ID is 118 to SH_CLERK if the employee belongs to a department which ID is 30 and the existing job ID does not start with SH.
update employees
set job_id= 'SH_CLERK' 
where employee_id=118 AND department_id=30 AND NOT job_id LIKE 'SH%';

-- Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 according to the company rules that, the salary will be increased by 25% of the department 40, 15% for department 90 and 10% of the department 110 and the rest of the department will remain same.
UPDATE employees 
SET salary= CASE department_id 
	WHEN 40 THEN salary+(salary*.25) 
    WHEN 90 THEN salary+(salary*.15)
    WHEN 110 THEN salary+(salary*.10)
    ELSE salary
   END
WHERE department_id IN (40,50,50,60,70,80,90,110);

-- Alter table statement
-- Write a SQL statement to rename the table countries to country_new.
alter table countries rename to country_new2;

-- Write a SQL statement to add a column region_id to the table locations.
alter table locations add column region_id integer;

-- Write a SQL statement to change the data type of the column region_id to text in the table locations.
alter table locations alter column region_id type text;

-- Write a SQL statement to drop the column city from the table locations.
alter table locations drop column city;

-- Write a SQL statement to change the name of the column state_province to state, keeping the data type and size same.
alter table locations rename column state_province to state;

-- Write a SQL statement to add a primary key for the columns location_id in the locations table.
alter table locations
ADD PRIMARY KEY (location_id);

-- Write a SQL statement to add a primary key for a combination of columns location_id and country_id.
alter table locations
ADD PRIMARY KEY (location_id,country_id);

-- Write a SQL statement to drop the existing primary from the table locations on a combination of columns location_id and country_id.
alter table locations
DROP PRIMARY KEY;

-- Write a SQL statement to add a foreign key on job_id column of job_history table referencing to the primary key job_id of jobs table.
alter table job_history
ADD FOREIGN KEY(job_id) REFERENCES jobs(job_id);

-- Write a SQL statement to add a foreign key constraint named fk_job_id on job_id column of job_history table referencing to the primary key job_id of jobs table.
alter table job_history
ADD CONSTRAINT fk_job_id 
FOREIGN KEY (job_id) REFERENCES jobs(job_id) 
ON UPDATE RESTRICT 
ON DELETE CASCADE;

-- Write a SQL statement to drop the existing foreign key fk_job_id from job_history table on job_id column which is referencing to the job_id of jobs table.
alter table job_history
DROP FOREIGN KEY fk_job_id;

-- Write a SQL statement to add an index named index_job_id on job_id column in the table job_history.
alter table job_history
add index indx_job_id(job_id);

-- Write a SQL statement to drop the index indx_job_id from job_history table.
alter table job_history
drop index indx_job_id;

-- Aggregate functions
-- Write a query to find the number of jobs available in the employees table.
select count(distinct job_id) from employees;

-- Write a query to get the total salaries payable to employees.
select sum(salary) from employees;

-- Write a query to get the minimum salary from employees table.
select min(salary) from employees;

-- Write a query to get the maximum salary of an employee working as a Programmer.
select max(salary) from employees e,jobs j where e.job_id = j.job_id and j.job_title = 'Programmer';

-- Write a query to get the average salary and number of employees working in the department which ID is 90.
select avg(salary), count(employee_id) from employees 
where department_id = 90;

-- Write a query to get the highest, lowest, total, and average salary of all employees.
select max(salary),min(salary),sum(salary), avg(salary) from employees;

-- Write a query to get the number of employees working in each post.
select job_id,count(employee_id) from employees
group by job_id
order by job_id;

-- Write a query to get the difference between the highest and lowest salaries.
select max(salary)-min(salary) as difference from employees;

-- Write a query to find the manager ID and the salary of the lowest-paid employee under that manager.
select manager_id, min(salary) from employees
where manager_id IS NOT NULL
group by manager_id
order by MIN(salary) DESC;

-- Write a query to get the department ID and the total salary payable in each department.
select department_id, sum(salary) from employees
where department_id IS NOT NULL
group by department_id
order by department_id;

-- Write a query to get the average salary for each post excluding programmer.
select e.job_id,j.job_title, avg(salary) from employees e,jobs j 
where e.job_id = j.job_id and j.job_title <> 'Programmer'
group by e.job_id,j.job_title
order by e.job_id;

-- Write a query to get the total salary, maximum, minimum and average salary of all posts for those departments which ID 90.
select job_id, SUM(salary), MAX(salary), MIN(salary), AVG(salary)
FROM employees 
WHERE department_id = '90' 
GROUP BY job_id;

-- Write a query to get the job ID and maximum salary of each post for maximum salary is at or above $4000.
select job_id, MAX(salary) as max_salary
FROM employees 
group by job_id
HAVING MAX(salary) >=4000;

-- Write a query to get the average salary for all departments working more than 10 employees.
select department_id, AVG(salary)
FROM employees 
GROUP BY department_id
HAVING COUNT(employee_id) > 10;