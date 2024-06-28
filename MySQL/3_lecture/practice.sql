-- Use classicmodels database
use classicmodels;

show tables;
select * from customers;

-- Order by : it is used for sort data into acending order and decending order 

select * from customers order by customerName , city desc ;

select * from employees where employeeNumber >= 1323 order by jobtitle desc , firstname asc ;

-- Use conditional operators example < , > , && , = , != 
select * from employees where employeeNumber < 1300 && officecode = 1;  

select * from employees where  officecode = 5  || employeeNumber < 1300;  

select * from employees where  officecode < 7  || employeeNumber < 1300;  

select * from employees where !(officecode != 5);


-- or operator with order by 

select * from customers where country = 'USA' || country = 'France' || country = 'Poland' order by country;

-- In , not in operator : same above thing using in operator it makes easy above work

select * from customers where country in ('France' , ' Germany');

select * from customers where country not in ('France' , 'Germany');

-- between , not between operator : it give range of numerical(number) value

select * from customers where customernumber between 141 and 148;

select * from customers where customernumber not between 141 and 148;



-- Limit opearator : limit give limit of range ex : limit 10 gives only first 10 records 

select * from customers limit 10;  

-- second one is use for skip

select * from customers limit 10 , 2;  -- skip ,2

-- distinct means one kind of unique value ex: if we have 5 country with same name then it will not show 5 country 5 times but it will show only one time that country 

select distinct country from customers;

-- Count : count total of that perticular field

select count(customername) as Total_customers from customers; 

-- Group by : group by and distinct is same but main difference is that we can count any fields data by using group by statement

select country , count(customername)  as Total_customers from customers group by country;



