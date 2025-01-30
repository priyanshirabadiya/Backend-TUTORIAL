-- create database interview_prepare;

-- use interview_prepare;

-- show tables;

-- create table user(
-- firstName varchar(50) , 
-- lastName varchar(30) , 
-- email varchar(20) , 
-- gender varchar(20), mobile int);

-- insert into user values("niya" , "goiswami" , "niya@gmail.com" , "female" , 789645123);

-- insert into user(firstName,lastName,email,gender,mobile) values
-- 	("piyanshi" , "rk" , "piya@gmail.com" , "female" , 789645123),
-- 	("manis" , "shah" , "manis@gmail.com" , "male" , 859645123)
-- ;

-- select * from user;


-- create table CLIENT_MASTER (
--     clientno varchar(10) ,
--     CName varchar(50) ,  
--     city varchar(15) , 
--     pincode decimal(8 , 0) , 
--     Cstate varchar(15) , 
--     Baldue decimal(10 , 2)
-- );

-- CREATE TABLE PRODUCT_MASTER (
-- PRODUCTNO VARCHAR(10) , 
-- DESCRIPTION VARCHAR(20) , 
-- PROFITPERCENT INT , 
-- UNITMEASURE VARCHAR(15) , 
-- QTYONHAND INT , 
-- REORDERLVL INT , 
-- SELLPRICE INT , 
-- COSTPRICE INT );

-- CREATE TABLE SALESMAN_MASTER (
-- SALEMANNO VARCHAR(10) , 
-- SALESMANNAME VARCHAR(20) , 
-- ADDRESS1 VARCHAR(30) , ADDRESS2 VARCHAR(30) , 
-- CITY VARCHAR(20) , PINCODE INT , STATE VARCHAR(20) , 
-- SALAMT decimal(8 ,2) , TGTTOGET decimal(6,2) , YTDSALES decimal(6,2) , 
-- REMARKS VARCHAR(60));

-- select * from SALESMAN_MASTER;


-- create table SALES_ORDER(
-- 	orderno varchar(20),
--     clientno varchar(20),
--     ORDERDATE DATE NOT NULL,
--     SALESMANNO VARCHAR(10) ,
--     DELYTYPE CHAR(1),
--     BILLYN CHAR(1),
--     DELYDATE DATE,
--     ORDERSTATUS VARCHAR(20) ,
--     primary key(orderno),
--     foreign key (clientno) references CLIENT_MASTER(clientno),
--     foreign key (SALESMANNO) references SALESMAN_MASTER(SALEMANNO)
-- );


-- CREATE TABLE SALES_ORDER (
--     ORDERNO VARCHAR(10),
--     CLIENTNO VARCHAR(10) ,
--     ORDERDATE DATE NOT NULL,
--     SALESMANNO VARCHAR(10) ,
--     DELYTYPE CHAR(1),
--     BILLYN CHAR(1),
--     DELYDATE DATE,
--     ORDERSTATUS VARCHAR(20) ,
--     PRIMARY KEY (ORDERNO ),
--     foreign key (CLIENTNO) REFERENCES CLIENT_MASTER(CLIENTNO) ,
--     foreign key (SALESMANNO) REFERENCES SALESMAN_MASTER(SALEMANNO)
-- );

-- DESCRIBE SALESMAN_MASTER;

-- alter table CLIENT_MASTER add primary key(clientno);
-- alter table SALESMAN_MASTER add primary key(SALEMANNO);

-- alter table PRODUCT_MASTER add primary key(PRODUCTNO);

-- select * from sales_order;

-- CREATE TABLE SALES_ORDER_DETAILS(
--     ORDERNO VARCHAR(10),
--     PRODUCTNO VARCHAR(10) ,
--     QTYORDERED INT,
--     QTYDISP INT , 
--     PRODUCTRATE INT,
--     foreign key (ORDERNO)  REFERENCES SALES_ORDER(ORDERNO) ,
--     foreign key (PRODUCTNO) REFERENCES PRODUCT_MASTER(PRODUCTNO)
-- );

-- select * from SALES_ORDER_DETAILS;



-- create table tbldept(
--     dno int primary key , 
--     dname varchar(20)
-- );

-- create table tblstud(
--     rno int primary key, 
--     fname varchar(20) , 
--     sname varchar(20) , 
--     dno int , 
--     sem int , 
--     contect_no  int , 
--     gender varchar(20), 
--     bdate date,
--     foreign key (dno) references tbldept(dno) ,
--     check(gender in('male','female')) 
-- );

-- insert records into tblstud result

-- INSERT INTO result VALUES (1, 1001, 85, 90);
-- INSERT INTO result VALUES (2, 1002, 75, 80);
-- INSERT INTO result VALUES (8, 1003, 95, 88);
-- INSERT INTO result VALUES (4, 1004, 65, 70);
-- INSERT INTO result VALUES (5, 1005, 55, 60);

-- select * from uniquecode;

-- select * from tblstud inner join tbldept on tblstud.dno = tbldept.dno;


-- select * from tblstud 
-- inner join tbldept on tblstud.dno = tbldept.dno
-- inner join result on tblstud.rno = result.rno
-- inner join uniquecode on result.unicode = uniquecode.unicode;

-- select * from tblstud 
-- inner join tbldept on tblstud.dno = tbldept.dno
-- inner join result on tblstud.rno = result.rno
-- inner join uniquecode on uniquecode.unicode = result.unicode
-- ;

-- select * from tblstud;

-- select d.dname , count(s.dno) as total_stud 
-- from tbldept d left join tblstud s on d.dno = s.dno group by d.dno ;


-- select * from SALES_ORDER_DETAILS sod 
-- inner join SALES_ORDER so on sod.ORDERNO = so.ORDERNO
-- inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
-- where cm.CName = "Ivan Bayoss";

-- describe CLIENT_MASTER;

-- SELECT pm.DESCRIPTION, pm.QTYONHAND
-- FROM SALES_ORDER_DETAILS sod
-- INNER JOIN SALES_ORDER so ON so.ORDERNO = sod.ORDERNO
-- INNER JOIN PRODUCT_MASTER pm ON sod.PRODUCTNO = pm.PRODUCTNO
-- where MONTH(so.ORDERDATE) = MONTH('2004-04-18');

-- select PRODUCTNO , DESCRIPTION from PRODUCT_MASTER pm where not exists (
--     select PRODUCTNO from SALES_ORDER_DETAILS sod where sod.PRODUCTNO = pm.PRODUCTNO
-- );

-- select * from PRODUCT_MASTER;
-- select * from SALES_ORDER_DETAILS;

-- select * from PRODUCT_MASTER pm where not exists(
-- 	select * from SALES_ORDER_DETAILS sod where sod.PRODUCTNO = pm.PRODUCTNO
-- );



-- create index idx_city on CLIENT_MASTER(city);
-- create index idx_cno on CLIENT_MASTER(clientno);
-- select * from CLIENT_MASTER;

-- select * from CLIENT_MASTER where city = "Mumbai";

-- select * from CLIENT_MASTER where CName = "Ivan Bayoss";

-- show index from CLIENT_MASTER;

-- SHOW INDEX FROM CLIENT_MASTER;

-- CREATE INDEX idx_covering ON PRODUCT_MASTER(PRODUCTNO, SELLPRICE);

-- SELECT PRODUCTNO, SELLPRICE FROM PRODUCT_MASTER WHERE PRODUCTNO = 'P0001';

-- EXPLAIN SELECT * FROM SALES_ORDER WHERE ORDERSTATUS = 'In Process';

-- EXPLAIN SELECT * FROM CLIENT_MASTER WHERE city = 'Mumbai';

-- EXPLAIN ANALYZE SELECT * FROM CLIENT_MASTER WHERE city = 'Mumbai';


