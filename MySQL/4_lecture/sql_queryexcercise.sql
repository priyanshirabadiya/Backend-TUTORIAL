show databases;

use classicmodels;

-- 1. Fetch & display all the employee details

 select * from employees;

-- 2. Fetch & display employee details for the employees having job Title='Sales Rep' and Employee number between 1200 and 1500

select * from employees where jobTitle = 'sales rep' && employeeNumber between 1200 and 1500 ;

-- 3. Fetch & display employee details for the employees having office code 2 or more than 2 and job title is not Sales Rep

select * from employees where officeCode >= 2 && jobTitle != 'sales rep';

-- 4. Fetch & display customers details(Customers table) who does not belongs to USA

select * from customers where country not in ('USA');

-- 5. Fetch & display customers details(Customers table)  having customer number not in the range 150 to 200

select * from customers where customerNumber not between 150 and 200;


select * from employees;
-- 6. List out last name, first name for all employees and rename  last name as “Name of the employee”, display as sorting order of their last name

select lastname as 'Name of the employee' , firstname from employees order by lastName;

-- 7.  List out the customers having credit limit is more than 70000 display in descending order by their last name.

select * from customers;

select * from customers where creditLimit < 70000 && creditLimit != 0 order by contactLastName desc ;

-- 8. List out all customers belongs to city Singapore, Liverpool or NYC

select * from customers where city in ('Singapore', 'Liverpool' , 'NYC') ;

-- 9. List the details about customer first name “SMITH”

select * from customers where contactFirstName = 'smith';

-- 10. List out the employees who are working in office code 1, 3 , 5

select * from employees where officeCode in ( 1 , 3 , 5 );

-- 11. List out the customer having credit limit between 50000 and 95000

select * from customers where creditLimit between 50000 and 95000 ;

-- 12. List out the employees who are not working in office code 1 , 3

select * from employees where officeCode not in ( 1 , 3 );

--  13. List out the customers whose first name starts with “S”

select * from customers where contactFirstName like 's%';

-- 14. List out the customers whose name start with “S” and end with “H”

select * from customers where contactFirstName like 's%h';

-- 15. List out the customers whose first name length is 5 and start with “S”

select * from customers where contactFirstName like 's____';

-- 16. List out the customers whose first name length is exactly 8

select * from customers where contactFirstName like '________';

-- 17. List out the customers whose first name starting with a and ending with e

select * from customers where contactFirstName like 'a%e';

-- 18. List out the customers whose first name contains ee

select * from customers where contactFirstName like '%e%';

-- 19. Show Count of employees who are working in different office in the organization

select officeCode , jobTitle ,count(jobTitle) from employees group by officeCode ;



