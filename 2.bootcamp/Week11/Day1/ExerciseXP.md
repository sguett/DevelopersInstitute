-- Basic select statement
-- Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from employee table.
select first_name as "First Name", last_name as "Last Name"
from employees;

-- Write a query to get a unique department ID from employee table.
select distinct department_id
from employees;

-- Write a query to get the details of all employees from the employee table in descending order by their first name.
select *
from employees
order by first_name DESC;

-- Write a query to get the names (first_name, last_name), salary and 15% of salary as PF for all the employees.
select first_name, last_name, salary, (salary*.15) as PF
from employees;

-- Write a query to get the employee ID, names (first_name, last_name) and salary in ascending order according to their salary.
select employee_id, first_name || ' ' || last_name as name, salary
from employees
order by salary ASC;

-- Write a query to get the total salaries payable to employees.
select sum(salary) as total_salary
from employees;

-- Write a query to get the maximum and minimum salary paid to the employees.
select max(salary) as max_salary, min(salary) as min_salary
from employees;

-- Write a query to get the average salary and number of employees are working.
select avg(salary) as avg_salary, count(employee_id)
from employees;

-- Write a query to get the number of employees working with the company.
select count(employee_id)
from employees;

-- Write a query to get the unique number of designations available in the employees table.
select count(distinct job_id)
from employees;

-- Write a query to get all the first name from the employees table in upper case.
select upper(first_name)
from employees;

-- Write a query to get the first three characters of the first name for all the employees in the employees table.
select left(first_name,3)
from employees;

-- Write a query to calculate the expression 171*214+625.
select 171 * 214 + 625;

-- Write a query to get the name, including first name and last name of all the employees from employees table.
select first_name || ' ' || last_name as name
from employees;

-- Write a query to get the first names after removing all the leading and trailing blanks of all the employees from employees table.
select TRIM(BOTH ' ' FROM first_name)
from employees;

-- Write a query to get the first name, last name and the length of the name, including first_name and last_name of all the employees from employees table.
select first_name, last_name, LENGTH(first_name)+LENGTH(last_name)
from employees;

-- Write a query to check whether the first_name column of the employees table containing any number.
SELECT * 
FROM employees 
WHERE  first_name REGEXP '[0-9]'; -- ERROR

-- Write a query to select first ten records from a table.
select employee_id, first_name 
from employees  LIMIT 10;

-- Write a query to get a monthly salary (rounded up to 2 decimal places) of each employee.
-- Note : Assume the salary field provides the ‘annual salary’ information.
select first_name, last_name, round(salary/12,2) as "Monthly Salary"
from employees;

-- Creates Tables
-- Write a SQL statement to create a simple table countries including columns country_id,country_name and region_id.
create table countries(
	country_id integer,
	country_name varchar,
	region_id integer
);

-- Write a SQL statement to create a simple table countries including columns country_id,country_name and region_id which already exist.
create table IF NOT EXISTS countries( 
	country_id integer,
	country_name varchar,
	region_id integer
);
select * from countries
-- Write a SQL statement to create the structure of a table dup_countries similar to countries.
CREATE TABLE dup_countries AS 
(SELECT * 
FROM countries)  
WITH NO DATA;


-- Write a SQL statement to create a duplicate copy of countries table including structure and data by name dup_countries.
CREATE TABLE IF NOT EXISTS dup_countries
AS SELECT * FROM  countries;

-- Write a SQL statement to create a table countries set a constraint NULL.
CREATE TABLE IF NOT EXISTS countries ( 
	country_id integer not null,
	country_name varchar not null,
	region_id integer not null
);

-- Write a SQL statement to create a table named jobs including columns job_id, job_title, min_salary, max_salary and check whether the max_salary amount exceeding the upper limit 25000.
create table if not exists jobs ( 
	job_id varchar NOT NULL , 
	job_title varchar NOT NULL, 
	min_salary decimal, 
	max_salary decimal CHECK(max_salary<=25000)
);

-- Write a SQL statement to create a table named countries including columns country_id, country_name and region_id and make sure that no countries except Italy, India and China will be entered in the table.
create table if not exists countries ( 
	country_id varchar,
	country_name varchar CHECK(country_name IN('Italy','India','China')) ,
	region_id decimal
);

-- Write a SQL statement to create a table named countries including columns country_id,country_name and region_id and make sure that no duplicate data against column country_id will be allowed at the time of insertion.
create table if not exists countries ( 
	country_id varchar NOT NULL,
	country_name varchar NOT NULL,
	region_id decimal NOT NULL,
	UNIQUE(country_id)
);

-- Write a SQL statement to create a table named jobs including columns job_id, job_title, min_salary and max_salary, and make sure that, the default value for job_title is blank and min_salary is 8000 and max_salary is NULL will be entered automatically at the time of insertion if no value assigned for the specified columns.
create table if not exists jobs ( 
	job_id varchar NOT NULL UNIQUE, 
	job_title varchar NOT NULL DEFAULT ' ', 
	min_salary decimal DEFAULT 8000, 
	max_salary decimal DEFAULT NULL
);

-- Write a SQL statement to create a table named countries including columns country_id, country_name and region_id and make sure that the country_id column will be a key field which will not contain any duplicate data at the time of insertion.
create table if not exists countries ( 
	country_id varchar NOT NULL UNIQUE PRIMARY KEY,
	country_name varchar NOT NULL,
	region_id decimal NOT NULL
);

-- Write a SQL statement to create a table countries including columns country_id, country_name and region_id and make sure that the column country_id will be unique and store an auto-incremented value.
create table if not exists countries ( 
	country_id serial NOT NULL UNIQUE PRIMARY KEY,
	country_name varchar NOT NULL,
	region_id decimal NOT NULL
);

-- Write a SQL statement to create a table countries including columns country_id, country_name and region_id and make sure that the combination of columns country_id and region_id will be unique.
CREATE TABLE IF NOT EXISTS countries (
	country_id varchar NOT NULL UNIQUE DEFAULT '',
	country_name varchar DEFAULT NULL,
	region_id decimal NOT NULL,
	PRIMARY KEY (country_id,region_id)
);

-- Write a SQL statement to create a table job_history including columns employee_id, start_date, end_date, job_id and department_id and make sure that, the employee_id column does not contain any duplicate value at the time of insertion and the foreign key column job_id contain only those values which exist in the jobs table.
create table job_history(
	employee_id integer not null primary key,
	start_date date not null,
	end_date date not null,
	job_id integer not null,
	department_id integer default null,
	foreign key (job_id) references jobs(job_id)
);

-- Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, email, phone_number hire_date, job_id, salary, commission, manager_id and department_id and make sure that, the employee_id column does not contain any duplicate value at the time of insertion and the foreign key columns combined by department_id and manager_id columns contain only those unique combination values, which combinations exist in the departments table.
create table if not exists employees ( 
	employee_id integer NOT NULL PRIMARY KEY, 
	first_name varchar DEFAULT NULL, 
	last_name varchar NOT NULL, 
	email varchar NOT NULL, 
	phone_number integer DEFAULT NULL, 
	hire_date date NOT NULL, 
	job_id varchar NOT NULL, 
	salary decimal DEFAULT NULL, 
	commission decimal DEFAULT NULL, 
	manager_id integer DEFAULT NULL, 
	department_id integer DEFAULT NULL, 
	FOREIGN KEY(department_id) REFERENCES  departments(department_id),
	FOREIGN KEY(manager_id) REFERENCES  departments(manager_id)
);

-- Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, email, phone_number hire_date, job_id, salary, commission, manager_id and department_id and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column department_id, reference by the column department_id of departments table, can contain only those values which are exist in the departments table and another foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which exist in the jobs table.
create table if not exists employees ( 
	employee_id integer NOT NULL PRIMARY KEY, 
	first_name varchar DEFAULT NULL, 
	last_name varchar NOT NULL, 
	email varchar NOT NULL, 
	phone_number integer DEFAULT NULL, 
	hire_date date NOT NULL, 
	job_id varchar NOT NULL, 
	salary decimal DEFAULT NULL, 
	commission decimal DEFAULT NULL, 
	manager_id integer DEFAULT NULL, 
	department_id integer DEFAULT NULL, 
	FOREIGN KEY(department_id) REFERENCES  departments(department_id),
	FOREIGN KEY(job_id) REFERENCES  jobs(job_id )
);

-- Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, job_id, salary and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which exist in the jobs table. The specialty of the statement is that the ON UPDATE CASCADE action allows you to perform the cross-table update and ON DELETE RESTRICT action rejects the deletion. The default action is ON DELETE RESTRICT.
create table if not exists employees ( 
	employee_id integer NOT NULL PRIMARY KEY, 
	first_name varchar DEFAULT NULL, 
	last_name varchar NOT NULL,  
	job_id varchar NOT NULL, 
	salary decimal DEFAULT NULL, 
	FOREIGN KEY(job_id) REFERENCES  jobs(job_id ) ON UPDATE CASCADE ON DELETE RESTRICT
);

-- Assume that the following is the structure of the table jobs.
CREATE TABLE IF NOT EXISTS jobs ( 
	JOB_ID INTEGER NOT NULL UNIQUE PRIMARY KEY, 
	JOB_TITLE varchar(35) NOT NULL DEFAULT ' ', 
	MIN_SALARY decimal(6,0) DEFAULT 8000, 
	MAX_SALARY decimal(6,0) DEFAULT NULL
);

-- Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, job_id, salary and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which exist in the jobs table. The specialty of the statement is that the ON DELETE CASCADE that lets you allow to delete records in the employees(child) table that refers to a record in the jobs(parent) table when the record in the parent table is deleted and the ON UPDATE RESTRICT actions reject any updates.
create table if not exists employees ( 
	employee_id integer NOT NULL PRIMARY KEY, 
	first_name varchar DEFAULT NULL, 
	last_name varchar NOT NULL,  
	job_id varchar NOT NULL, 
	salary decimal DEFAULT NULL, 
	FOREIGN KEY(job_id) REFERENCES  jobs(job_id ) ON DELETE CASCADE ON UPDATE RESTRICT
);

-- Assume that the following is the structure of the table jobs.
CREATE TABLE IF NOT EXISTS jobs ( 
	JOB_ID INTEGER NOT NULL UNIQUE PRIMARY KEY, 
	JOB_TITLE varchar(35) NOT NULL DEFAULT ' ', 
	MIN_SALARY decimal(6,0) DEFAULT 8000, 
	MAX_SALARY decimal(6,0) DEFAULT NULL
);

-- Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, job_id, salary and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which exist in the jobs table. The specialty of the statement is that the ON DELETE SET NULL action will set the foreign key column values in the child table(employees) to NULL when the record in the parent table(jobs) is deleted, with a condition that the foreign key column in the child table must accept NULL values and the ON UPDATE SET NULL action resets the values in the rows in the child table(employees) to NULL values when the rows in the parent table(jobs) are updated.
create table if not exists employees ( 
	employee_id integer NOT NULL PRIMARY KEY, 
	first_name varchar DEFAULT NULL, 
	last_name varchar NOT NULL,  
	job_id varchar, 
	salary decimal DEFAULT NULL, 
	FOREIGN KEY(job_id) REFERENCES  jobs(job_id ) ON DELETE SET NULL ON UPDATE SET NULL 
);

-- Assume that the following is the structure of two table jobs.
CREATE TABLE IF NOT EXISTS jobs ( 
	JOB_ID INTEGER NOT NULL UNIQUE PRIMARY KEY, 
	JOB_TITLE varchar(35) NOT NULL DEFAULT ' ', 
	MIN_SALARY decimal(6,0) DEFAULT 8000, 
	MAX_SALARY decimal(6,0) DEFAULT NULL
);

-- Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, job_id, salary and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which exist in the jobs table. The specialty of the statement is that, The ON DELETE NO ACTION and the ON UPDATE NO ACTION actions will reject the deletion and any updates.
create table if not exists employees ( 
	employee_id integer NOT NULL PRIMARY KEY, 
	first_name varchar DEFAULT NULL, 
	last_name varchar NOT NULL,  
	job_id varchar NOT NULL, 
	salary decimal DEFAULT NULL, 
	FOREIGN KEY(job_id) REFERENCES  jobs(job_id ) ON DELETE NO ACTION ON UPDATE NO ACTION 
);

-- Assume that the following is the structure of two table jobs.
CREATE TABLE IF NOT EXISTS jobs ( 
JOB_ID INTEGER NOT NULL UNIQUE PRIMARY KEY, 
JOB_TITLE varchar(35) NOT NULL DEFAULT ' ', 
MIN_SALARY decimal(6,0) DEFAULT 8000, 
MAX_SALARY decimal(6,0) DEFAULT NULL
);

-- Restricting and sorting
-- Write a query to display the name, including first_name and last_name and salary for all employees whose salary is out of the range between $10,000 and $15,000.
select first_name|| ' ' || last_name as name, salary
from employees
where salary NOT BETWEEN 10000 AND 15000;

-- Write a query to display the name, including first_name and last_name, and department ID who works in the department 30 or 100 and arrange the result in ascending order according to the department ID.
select first_name|| ' ' || last_name as name, department_id
from employees 
where department_id in (30,100)
order by department_id ASC;

-- Write a query to display the name, including first_name and last_name, and salary who works in the department either 30 or 100 and salary is out of the range between $10,000 and $15,000.
select first_name|| ' ' || last_name as name, salary
from employees 
where department_id in (30,100)
and salary NOT BETWEEN 10000 AND 15000;

-- Write a query to display the name, including first_name and last_name and hire date for all employees who were hired in 1987.
select first_name|| ' ' || last_name as name, hire_date
from employees 
where EXTRACT (YEAR FROM hire_date) = '1987';

-- Write a query to get the first name of the employee who holds the letter ‘c’ and ‘e’ in the first name.
select first_name
from employees
where first_name like '%c%' and first_name like '%e%';

-- Write a query to display the last name, job, and salary for all those employees who hasn’t worked as a Programmer or a Shipping Clerk, and not drawing the salary $4,500, $10,000, or $15,000.
select last_name, e.job_id, j.job_title, salary
from employees e
left join jobs j on e.job_id = j.job_id
where
	j.job_title not in ('Programmer','Shipping Clerk')
	and salary not in('4500','10000','15000');

-- Write a query to display the last names of employees whose name contain exactly six characters.
select last_name
from employees
where length(last_name) = 6;

-- Write a query to display the last name of employees having ‘e’ as the third character.
select last_name
from employees
where last_name like '__e%';

-- Write a query to display the jobs/designations available in the employees table.
select e.job_id, j.job_title
from employees e
left join jobs j on e.job_id = j.job_id
group by e.job_id, j.job_title
order by e.job_id;

-- Write a query to display the name, including first_name, last_name, salary and 15% of salary as PF of all employees.
select first_name|| ' ' || last_name as name, salary, salary*.15 as PF
from employees;

-- Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
select *
from employees
where upper(last_name) in ('JONES','BLAKE','SCOTT','KING','FORD');