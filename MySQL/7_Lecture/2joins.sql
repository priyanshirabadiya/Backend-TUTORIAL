create table cust(
    cust_id int primary key , 
    cust_name varchar(20) , 
    address varchar(20) , 
    city varchar(20) , 
    phono_no int 
);

create table ordertbl(
    or_id int primary key , 
    or_date date , 
    ship_date date , 
    total_amt int , 
    cust_id int ,
    foreign key (cust_id) references cust(cust_id)
);


insert into cust values(100 , 'jocksports','345 view','pune',785496);
insert into cust values(101 , 'TKB shop','490 baliroad','banglore',367895);
insert into cust values(102 , 'vollyrite','9722 hamilton','Mumnbai',347823);
insert into cust values(103 , 'just tennies','Hillview mall','banglore ',677823);
insert into cust values(104 , 'every mountain','574,sytRD','chennai',547845);
insert into cust values(105 , 'KT sport','348,paseo','banglore',547889);
insert into cust values(106 , 'shape up','908 samiratan','Mumbai',547889);
insert into cust values(107 , 'womens sports','west village','Mumbai',589889);
insert into cust values(108 , 'north woodshealth','96, pine way','pune',569889);
insert into cust values(109 , 'jack','south village','pune',459889);
insert into cust values(110 , 'veriana','690 karni RD','banglore',495889);



insert into ordertbl values(601 ,to_date('15/06/01 ','dd/mm/yy'),to_date('20/06/01 ',' dd/mm/yy'), 2 , 106);
insert into ordertbl values(602 ,to_date('07/06/06 ',' dd/mm/yy'),to_date('07/07/03 ',' dd/mm/yy'), 56 , 102);
insert into ordertbl values(603 ,to_date('21/03/04 ',' dd/mm/yy'),to_date('25/03/04 ',' dd/mm/yy'), 224 , 102);
insert into ordertbl values(604 ,to_date('04/07/04 ',' dd/mm/yy'),null , 224 , 106);
insert into ordertbl values(605 ,to_date('17/05/04 ',' dd/mm/yy'),to_date('17/06/04 ',' dd/mm/yy'), 8324 , 106);
insert into ordertbl values(606 ,to_date('09/08/04 ',' dd/mm/yy'),null , 3 , 100);
insert into ordertbl values(607 ,to_date('05/05/09 ',' dd/mm/yy'),to_date('07/05/09 ',' dd/mm/yy'), 6 , 104);
insert into ordertbl values(608 ,to_date('15/10/09 ',' dd/mm/yy'),to_date('24/10/09 ',' dd/mm/yy'), 35 , 104);
insert into ordertbl values(609 ,to_date('23/11/09 ',' dd/mm/yy'),null, 98 , 100);
insert into ordertbl values(610 ,to_date('25/11/09 ',' dd/mm/yy'),null, 101 , 101);
insert into ordertbl values(611 ,to_date('22/12/09 ',' dd/mm/yy'),to_date('24/12/09 ',' dd/mm/yy'), 45 , 102);
insert into ordertbl values(612 ,to_date('15/12/09 ',' dd/mm/yy'),to_date('26/12/09 ',' dd/mm/yy'), 5860 , 104);
insert into ordertbl values(613 ,to_date('30/12/09 ',' dd/mm/yy'),null, 6400 , 108);
insert into ordertbl values(614 ,to_date('04/04/10 ',' dd/mm/yy'),to_date('05/04/10 ',' dd/mm/yy'), 23940 , 102);
insert into ordertbl values(615 ,to_date('04/04/10 ',' dd/mm/yy'),to_date('05/04/10 ',' dd/mm/yy'), 710 , 107);
insert into ordertbl values(616 ,to_date('04/04/10 ',' dd/mm/yy'),to_date('05/04/10 ',' dd/mm/yy'), 764 , 103);
insert into ordertbl values(617 ,to_date('04/02/11 ',' dd/mm/yy'),to_date('05/05/11 ',' dd/mm/yy'), 43370 , 105);
insert into ordertbl values(618 ,to_date('03/04/12 ',' dd/mm/yy'),to_date('07/06/12 ',' dd/mm/yy'), 764 , 102);
insert into ordertbl values(619 ,to_date('04/06/13 ',' dd/mm/yy'),to_date('17/06/13 ',' dd/mm/yy'), 730 , 100);
insert into ordertbl values(620 ,to_date('04/03/13 ',' dd/mm/yy'),to_date('11/06/13 ',' dd/mm/yy'), 4450, 100);
insert into ordertbl values(621 ,to_date('07/06/13 ',' dd/mm/yy'),to_date('18/10/13 ',' dd/mm/yy'), 730, 100);



-- ----------------------------------------queries--------------------------------------------


select * from cust;
select * from ordertbl;


-- 1)
select * from cust c join ordertbl o on c.cust_id = o.cust_id;

-- 2)

select count(c.cust_name) as customers_orders , c.cust_name from cust c join ordertbl o on c.cust_id = o.cust_id 
group by c.cust_name;


-- 3)

select * from cust where city='banglore';

-- 4)

select * from cust where city='banglore' or city="Mumnbai" ;
select * from cust where city in ('banglore','Mumnbai') ;


-- 6)
select * from cust where city not in ('banglore','Mumnbai') ;

-- 7)

select c.cust_id , o.or_id , o.or_date , o.ship_date, o.total_amt from cust c join ordertbl o on c.cust_id = o.cust_id 
where c.cust_id = 102;

-- 8)

select c.cust_id ,o.or_id , o.or_date , o.ship_date, o.total_amt from cust c join ordertbl o on c.cust_id = o.cust_id 
where c.cust_id in (102 ,103);

-- 10)

select c.cust_id , count(c.cust_id) as Total_orders from cust c join ordertbl o on c.cust_id = o.cust_id 
where c.cust_id = 102 group by c.cust_id ;

-- 11)

select * from cust c where cust_name like  'j%';

-- 12)

select * from cust c where cust_name not like  '%j%';

-- 13)

select * from cust where cust_name like '_o%';

-- 14)

select * from cust where cust_name like '%s%';

-- 15)

select * from cust where cust_name like '%rt%';

-- 16)

select * from ordertbl where (total_amt >= 1000 && total_amt <= 5000 );

select total_amt from ordertbl;


-- 17)

select * from ordertbl where ship_date is null;

-- 18)

select * from cust order by cust_name;

-- 19)

select c.cust_name , o.total_amt from cust c join ordertbl o where c.cust_id = o.cust_id 
order by c.cust_name , o.total_amt  ;

-- 20)

select c.cust_name , o.total_amt from cust c join ordertbl o where c.cust_id = o.cust_id 
order by c.cust_name , o.total_amt desc;

-- 21)

select c.cust_name , o.total_amt , o.ship_date from cust c join ordertbl o on c.cust_id = o.cust_id  
where o.ship_date is null
order by o.total_amt desc ;

-- 22)
SELECT * 
FROM ordertbl 
ORDER BY or_date;


SELECT cust_id, COUNT(*) AS total_orders
FROM ordertbl
GROUP BY cust_id;

-- 23)

select count(distinct cust_id) as cusomers from ordertbl;

-- 24)

select totaL_amt , sum(total_amt) as sum , avg(total_amt) as average from ordertbl
where ship_date is not null;

-- 25)
select  max(total_amt) as hignhest, min(total_amt) lowest from ordertbl where ship_date is not null;
select * from ordertbl;

-- 26)

select count(*) from ordertbl where ship_date is null;

-- 27)

select count(*) from ordertbl where ship_date is not null;

-- 28)



-- 29)

select * from cust;
select distinct city ,count(cust_id) as customers from cust group by(city);


-- 30)
select * from ordertbl;

select date(or_date) , count(or_date) as countedate from ordertbl 
group by date(or_date);

-- 31)

select distinct cust_id , count(cust_id) as totalids from ordertbl 
group by cust_id 
having count(cust_id) > 3
;

-- 32)
select * from cust;

select c.cust_name , o.* from cust c join ordertbl o on c.cust_id = o.cust_id;

-- 33)

select * from cust c join ordertbl o on c.cust_id = o.cust_id where o.or_date < date('2010-02-04');

-- 34)

select * from cust c join ordertbl o on c.cust_id = o.cust_id where month(o.ship_date) = 3 ;

-- 35)

select * from cust c join ordertbl o on c.cust_id = o.cust_id 
where year(o.or_date) in ('2009 ' , '2010') order by o.or_date ;

