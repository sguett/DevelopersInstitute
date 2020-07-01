-- Joins
-- Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.
select location_id, street_address, city, state_province, country_name
from locations
natural join countries;

-- Write a query to make a join with employees and departments table to find the name of the employee, including first_name and last name, department ID and name of departments.
SELECT first_name, last_name, department_id, department_name 
FROM employees 
JOIN departments USING (department_id);

-- Write a SQL query to make a join with three tables employees, departments and locations to find the name, including first_name and last_name, jobs, department name and ID, of the employees working in London.
SELECT e.first_name, e.last_name, e.job_id, e.department_id, d.department_name 
FROM employees e 
JOIN departments d ON (e.department_id = d.department_id) 
JOIN locations l ON (d.location_id = l.location_id) 
WHERE LOWER(l.city) = 'London';

-- Write a query to make a join with two tables employees and itself to find the employee id, last_name as Employee along with their manager_id and last name as Manager.
SELECT e1.employee_id as "Emp_id" , e1.last_name AS "Employee",
e2.employee_id AS "Manager ID", e2.last_name AS "Manager"
FROM employees e1
JOIN employees e2 ON e1.manager_id= e2.employee_id;

-- Write a query to make a join with a table employees and itself to find the name, including first_name and last_name and hire date for those employees who were hired after the employee Jones.
SELECT e1.first_name, e1.last_name, e1.hire_date 
FROM employees e1 
JOIN employees e2 ON (e2.last_name = 'Jones') 
WHERE e2.hire_date < e1.hire_date;

-- Write a query to make a join with two tables employees and departments to get the department name and number of employees working in each department.
select d.department_id,department_name, count(e.employee_id)
from departments d
inner join employees e on e.department_id = d.department_id
group by department_name,d.department_id
order by d.department_id;

-- Write a query to make a join to find the employee ID, job title and number of days an employee worked, for all the employees who worked in a department which ID is 90.
select employee_id, job_title, end_date-start_date Days 
from job_history 
natural join jobs
WHERE department_id=90;

-- Write a query to make a join with two tables employees and departments to display the department ID, department name and the first name of the manager.
select w1.department_id, w1.department_name, w2.first_name 
from departments w1 
inner join employees w2 on (w1.department_id = w2.department_id);

-- Write a query to make a join with three tables departments, employees, and locations to display the department name, manager name, and city.
SELECT w1.department_name, w2.first_name, w3.city 
FROM departments w1 
JOIN employees w2 ON (w1.manager_id = w2.employee_id) 
JOIN locations w3 USING (location_id);

-- Write a query to make a join with two tables employees and jobs to display the job title and average salary of employees.
select job_title, avg(e.salary)
from jobs j
left join employees e on (j.job_id = e.job_id)
group by job_title;

-- Write a query to make a join with two tables employees and jobs to display the job title, employee name, and the difference between salary and the minimum salary of the employees.
select job_title, e.first_name, e.last_name, (e.salary-min_salary) as difference
from jobs j
left join employees e on (j.job_id = e.job_id)
group by job_title,e.first_name, e.last_name,difference;

-- Write a query to make a join with two tables job_history and employees to display the status of employees who is currently drawing the salary above 10000.
SELECT j.*
FROM job_history j
JOIN employees e ON (j.employee_id = e.employee_id) 
WHERE e.salary > 10000;

-- Write a query to make a join with two tables employees and departments to display department name, first_name and last_name, hire date and salary for all the managers who achieved a working experience is more than 15 years.
-- to finish


-- Subqueries
-- Write a query to find the first_name, last_name and salaries of the employees who have a higher salary than the employee whose last_name is Bull.
select first_name, last_name, salary 
from employees 
where salary > (select salary from employees where last_name = 'Bull');

-- Write a SQL subquery to find the first_name and last_name of all employees who works in the IT department.
select first_name, last_name 
from employees 
where department_id in (select department_id from departments where department_name='IT');

-- Write a SQL subquery to find the first_name and last_name of the employees under a manager who works for a department based in the United States.
select first_name, last_name from employees 
where manager_id in (select employee_id from employees where department_id 
IN (select department_id from departments WHERE location_id 
IN (select location_id from locations where country_id='US')));




select * from employees;

