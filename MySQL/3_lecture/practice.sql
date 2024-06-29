-- Use classicmodels database
use classicmodels;

-- show tables;
-- select * from customers;

-- 1) Order by : it is used for sort data into acending order and decending order 

select * from customers order by customerName , city desc ;

select * from employees where employeeNumber >= 1323 order by jobtitle desc , firstname asc ;

-- 2) Use conditional operators example < , > , && , = , != 
select * from employees where employeeNumber < 1300 && officecode = 1;  

select * from employees where  officecode = 5  || employeeNumber < 1300;  

select * from employees where  officecode < 7  || employeeNumber < 1300;  

select * from employees where !(officecode != 5);


-- 3) or operator with order by 

select * from customers where country = 'USA' || country = 'France' || country = 'Poland' order by country;

-- 4) In , not in operator : same above thing using in operator it makes easy above work

select * from customers where country in ('France' , ' Germany');

select * from customers where country not in ('France' , 'Germany');

-- 5) between , not between operator : it give range of numerical(number) value

select * from customers where customernumber between 141 and 148;

select * from customers where customernumber not between 141 and 148;



-- 6) Limit opearator : limit give limit of range ex : limit 10 gives only first 10 records 

select * from customers limit 10;  

-- second one is use for skip

select * from customers limit 10 , 2;  -- skip ,2

-- 7) distinct means one kind of unique value ex: if we have 5 country with same name then it will not show 5 country 5 times but it will show only one time that country 

select distinct country from customers;

-- 8) Count : count total of that perticular field

select count(customername) as Total_customers from customers; 

-- 9) Group by : group by and distinct is same but main difference is that we can count any fields data by using group by statement

select country , count(customername)  as Total_customers from customers group by country;



------------------------------------ Like operator ------------------------------------
select * from customers;

-- give all result which is start with letter 'a'
select * from customerName like 'a%'

-- give all result which is end with letter 'co'
select * from customers where customername like '%co' ; 

-- give all result which is start with letter 'h' and end with 'co'
select * from customers where customername like 'h%co';

-- give all result which contain string 'gift' any where in spelling it will except if it is at first or last
select * from customers where customername like '%gift%' ;

-- give results whose name caontain u at third position
select * from customers where customername like '__u%' ;

-- ingnore last letter ex : . => Co. 
select * from customers where customername like '%co_';

-- count after g and give result as per conditions ex: germany it is okay is there is no %g____
select * from customers where country like 'g______' ;

-- Count country which has only three letters
select * from customers where country like '___' ; 

