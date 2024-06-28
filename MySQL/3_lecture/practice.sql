use classicmodels;
-- show tables;

-- select * from customers;
-- select * from customers order by customerName , city desc ;

-- select * from employees where employeeNumber >= 1323 order by jobtitle desc , firstname asc ;
-- select * from employees where employeeNumber < 1300 && officecode = 1;  
-- select * from employees where  officecode = 5  || employeeNumber < 1300;  
-- select * from employees where  officecode < 7  || employeeNumber < 1300;  
-- select * from employees where !(officecode != 5);

-- select * from customers;

-- or operator with order by 
-- select * from customers where country = 'USA' || country = 'France' || country = 'Poland' order by country  ;
-- select * from customers where country in ('France ' , ' Germany');
-- select * from customers where country not in ('France' , 'Germany' );
-- select * from customers where customernumber between 141 and 148;
-- select * from customers where customernumber not between 141 and 148;



-- limit 10 gives only first 10 records 
select * from customers limit 10;  
select * from customers limit 10 , 2;  -- skip ,2
select distinct country from customers;
select count(customername) as Total_customers from customers; 
select country , count(customername)  as Total_customers from customers group by country;



