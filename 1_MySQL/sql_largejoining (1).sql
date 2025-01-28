
-- 1) CLIENT_MASTER table

create table CLIENT_MASTER (
    clientno varchar(10) ,
    Name varchar(50) not null ,  
    city varchar(15) , 
    pincode decimal(8 , 0) , 
    Cstate varchar(15) , 
    Baldue decimal(10 , 2) ,
    clientno primary key
);

insert into CLIENT_MASTER values 
("C0001" , "Ivan Bayoss" , "Mumbai" , 40054 , "Maharastra" , 15000);

insert into CLIENT_MASTER values 
("C0002" , "Mamta Muzumdar" , "Madras" , 780001 , "Tamil nadu" , 0);

insert into CLIENT_MASTER values 
("C0003" , "Chhaya Bankar" , "Mumbai" , 40057 , "Maharashtra" , 5000);

insert into CLIENT_MASTER values 
("C0004" , "Ashwini Joshi" , 'Banglore' , 56001  , "Karnataka" , 0),
("C0005" , "Hansel Colaco" , "Mumbai" , 400060  , "Maharatra" , 2000),
("C0006" , "Deepak sharma" , "Manglore" , 560050 , 'Karnataka' , 0) 
;  



-- 2)PRODUCT_MASTER TABLE

CREATE TABLE PRODUCT_MASTER (
    PRODUCTNO VARCHAR(10) ,
    DESCRIPTION VARCHAR(20) NOT NULL , 
    PROFITPERCENT INT NOT NULL , 
    UNITMEASURE VARCHAR(15) NOT NULL , 
    QTYONHAND INT NOT NULL , 
    REORDERLVL INT NOT NULL , 
    SELLPRICE INT NOT NULL , 
    COSTPRICE INT NOT NULL ,    
    PRIMARY KEY (PRODUCTNO)
);

INSERT INTO PRODUCT_MASTER values 
('P0001' , 'T-Shirt' , 5  , 'Piece' , 200 ,       50, 350 , 250);

INSERT INTO PRODUCT_MASTER values
("P0345"  , 'Shirts' , 6 , 'Piece'  , 50 ,        50 , 350 , 250 ),
("P06734" , 'Cotton Jeasns' , 5 , 'Piece' , 100 , 20 , 600 , 450),
("P07865" , 'Jeasn' , 5 , 'Piece' , 100  ,        20 , 750 , 500),
("P07868" , 'Trousers' , 2 , 'Piece' , 150 ,      20 , 750 , 500 ),
("P07885" , 'Pull Overs' , 2.5 , 'Piece' , 80 ,   30 , 700 , 450 ),
("P07965" , 'Denim Shirts' , 4 , 'Piece' , 100 ,  40 , 350 , 250 ) ,
("P07975" , 'Lycra Tops' , 5 , 'Piece' , 70 ,     30 , 300 , 175 ),
("P08865" , 'Skirts' , 5 , 'Piece' , 75 ,         30 , 450 , 300 )
;

select * from PRODUCT_MASTER;


-- 3) SALESMAN_MASTER Table

CREATE TABLE SALESMAN_MASTER (
    SALEMANNO VARCHAR(10) ,
    SALESMANNAME VARCHAR(20) NOT NULL ,
    ADDRESS1 VARCHAR(30) NOT NULL ,
    ADDRESS2 VARCHAR(30) ,
    CITY VARCHAR(20) ,
    PINCODE INT ,
    STATE VARCHAR(20) ,
    SALAMT decimal(8 ,2) NOT NULL ,
    TGTTOGET decimal(6,2) NOT NULL ,
    YTDSALES decimal(6,2) NOT NULL ,
    REMARKS VARCHAR(60) , 
    primary key (SALEMANNO)
);

INSERT INTO SALESMAN_MASTER values
('S0001' , 'Aman' , 'A/14' , 'Worli' , 'Mumbai' , 400002  , 'Maharastra' , 3000 , 100 , 50 , 'Good');
 
INSERT INTO SALESMAN_MASTER values 
('S0002' , 'Omkar' , '65' , 'Nariman' , 'Mumbai' , 400001 , 'Maharastra'  , 3000 , 200  , 100 , 'Good'),
('S0003' , 'Raj' , 'P-7' , 'Bandra' , 'Mumbai' , 400032 , 'Maharastra' , 3000 , 200 , 100 , 'Good'),
('S0004' , 'Ashish' , 'A/5' , 'Juhu' , 'Mumbai' , 400044 , 'Maharastra' , 3500 , 200 , 150 , 'Good');

select * from CLIENT_MASTER;



-- 4) SALES_ORDER Table


CREATE TABLE SALES_ORDER (
    ORDERNO VARCHAR(10),
    CLIENTNO VARCHAR(10) ,
    ORDERDATE DATE NOT NULL,
    SALESMANNO VARCHAR(10) ,
    DELYTYPE CHAR(1),
    BILLYN CHAR(1),
    DELYDATE DATE,
    ORDERSTATUS VARCHAR(20) ,
    PRIMARY KEY (ORDERNO ),
    foreign key (CLIENTNO) REFERENCES CLIENT_MASTER(CLIENTNO) ,
    foreign key (SALESMANNO) REFERENCES SALESMAN_MASTER(SALEMANNO)
);

INSERT INTO SALES_ORDER values
('019001', 'C0001', '2004-06-12', 'S0001', 'F', 'N', '2002-07-20', 'In Process'),
('019002', 'C0002', '2004-06-25', 'S0002', 'P', 'N', '2002-06-27', 'Cancelled'),
('046865', 'C0003', '2004-02-18', 'S0001', 'F', 'Y', '2002-02-20', 'Fulfilled'),
('019003', 'C0001', '2004-04-03', 'S0001', 'F', 'Y', '2002-04-07', 'Fulfilled'),
('046866', 'C0004', '2004-05-03', 'S0002', 'P', 'N', '2002-05-22', 'Cancelled'),
('019008', 'C0005', '2004-05-24', 'S0004', 'F', 'N', '2002-07-26', 'In Process');

select * from sales_order;

-- 5) SALES_ORDER_DETAILS table

CREATE TABLE SALES_ORDER_DETAILS(
    ORDERNO VARCHAR(10),
    PRODUCTNO VARCHAR(10) ,
    QTYORDERED INT,
    QTYDISP INT , 
    PRODUCTRATE INT,
    foreign key (ORDERNO)  REFERENCES SALES_ORDER(ORDERNO) ,
    foreign key (PRODUCTNO) REFERENCES PRODUCT_MASTER(PRODUCTNO)
);

INSERT INTO SALES_ORDER_DETAILS VALUES
('019001', 'P0001', 4, 4, 525), 
('019001', 'P07965', 2, 1, 8400),
('019001', 'P07885', 2, 1, 5250),   
('019002', 'P0001', 10, 10, 525),
('046865', 'P07868', 3, 3, 3150),
('046865', 'P07885', 3, 1, 5250),
('046865', 'P0001', 10, 10, 525),
('046865', 'P0345', 4, 4, 1050),
('019003', 'P0345', 2, 2, 1050), 
('019003', 'P06734', 1, 1, 12000),
('046866', 'P07965', 1, 0, 8400),
('046866', 'P07975', 1, 0, 1050),
('019008', 'P0001', 10, 5, 525),
('019008', 'P07975', 5, 3, 1050)
;



-- select statement , update statement , delete statement , drop statement


-- Retriving Data from first lec table 
-- 3) Exercise on retriving records from a table.

-- a. Find out the names of all clients.
SELECT CName FROM CLIENT_MASTER;

-- b. Retrive the entire contents of client_master table.
SELECT * FROM PRODUCT_MASTER;

-- c. Retrieve the list of names , city , and sate of all the clients.
SELECT CName , CITY , CSTATE FROM CLIENT_MASTER; 

-- d. list the various products available form product_master table.

SELECT * FROM PRODUCT_MASTER;

-- e. list all clients who are located at Mumbai

SELECT * FROM CLIENT_MASTER WHERE CITY = "Mumbai";

-- f. Find the names of salesmen who have a salary equal to Rs.3000.

SELECT SALESMANNAME FROM SALESMAN_MASTER WHERE SALAMT = 3000;



-- update Data
-- 4) Exercise on updating records in a table

-- a. Change the city of ClientNo 'C00005' to 'Bangalore'.

UPDATE CLIENT_MASTER SET CITY = "Bangalore" where ClientNo = 'C0005';

-- b. Change the BalDue of ClientNo 'C00001' to Rs. 1000.

UPDATE CLIENT_MASTER SET BalDue = 1000 WHERE ClientNo = 'C0001';

-- c. Change the cost price of 'Trousers' to Rs. 950.00.

UPDATE PRODUCT_MASTER SET SELLPRICE = 950 WHERE DESCRIPTION = 'Trousers';

-- d. Change the city of the salesman to Pune.

UPDATE SALESMAN_MASTER SET CITY = 'Pune'; 


-- Delete Data

DELETE FROM CLIENT_MASTER WHERE ClientNo = 'C0005';

-- Drop data : we can drop table and database also

DROP TABLE CLIENT_MASTER;

DROP TABLE NODE;

//--------------------------------------- other joining 3-4 tables queries

SQL> select * from client_master;

CLIENTNO   CNAME                                              CITY               PINCODE CSTATE              BALDUE
---------- -------------------------------------------------- --------------- ---------- --------------- ----------
C0001      Ivan Bayoss                                        Mumbai               40054 Maharastra           15000
C0002      Mamta Muzumdar                                     Madras              780001 Tamil Nadu               0
C0003      Chhaya Bankar                                      Mumbai               40057 Maharashtra           5000
C0004      Ashwini Joshi                                      Banglore             56001 Karnataka                0
C0005      Hansel Colaco                                      Mumbai              400060 Maharastra            2000
C0006      Deepak Sharma                                      Manglore            560050 Karnataka                0

6 rows selected.

SQL> select * from PRODUCT_MASTER;

PRODUCTNO  DESCRIPTION          PROFITPERCENT UNITMEASURE      QTYONHAND REORDERLVL  SELLPRICE  COSTPRICE
---------- -------------------- ------------- --------------- ---------- ---------- ---------- ----------
P0001      T-Shirt                          5 Piece                  200         50        350        250
P0345      Shirts                           6 Piece                              50        500        350
P06734     Cotton Jeans                     5 Piece                  100         20        600        450
P07865     Jeans                            5 Piece                  100         20        750        500
P07868     Trousers                         2 Piece                  150         20        750        500
P07885     Pull Overs                     2.5 Piece                   80         30        700        450
P07965     Denim Shirts                     4 Piece                  100         40        350        250
P07975     Lycra Tops                       5 Piece                   70         30        300        175
P08865     Skirts                           5 Piece                   75         30        450        300

9 rows selected.

SQL> select * from SALESMAN_MASTER;

SALEMANNO  SALESMANNAME         ADDRESS1                       ADDRESS2                       CITY                    PINCODE STATE                    SALAMT       TGTTOGET   YTDSALES
---------- -------------------- ------------------------------ ------------------------------ -------------------- ---------- -------------------- ---------- ---------- ----------
REMARKS
------------------------------------------------------------
S0001      Aman                 A/14                           Worli                          Mumbai                   400002 Maharastra                 3000            100         50
Good

S0002      Omkar                65                             Nariman                        Mumbai                   400001 Maharastra                 3000            200        100
Good

S0003      Raj                  P-7                            Bandra                         Mumbai                   400032 Maharastra                 3000            200        100
Good


SALEMANNO  SALESMANNAME         ADDRESS1                       ADDRESS2                       CITY                    PINCODE STATE                    SALAMT       TGTTOGET   YTDSALES
---------- -------------------- ------------------------------ ------------------------------ -------------------- ---------- -------------------- ---------- ---------- ----------
REMARKS
------------------------------------------------------------
S0004      Ashish               A/5                            Juhu                           Mumbai                   400044 Maharastra                 3500            200        150
Good


SQL> select * from SALES_ORDER;

ORDERNO    CLIENTNO   ORDERDATE SALESMANNO D B DELYDATE  ORDERSTATUS
---------- ---------- --------- ---------- - - --------- --------------------
019001     C0001      12-JUN-04 S0001      F N 20-JUL-02 In Process
019002     C0002      25-JUN-04 S0002      P N 27-JUN-02 Cancelled
046865     C0003      18-FEB-04 S0001      F Y 20-FEB-02 Fulfilled
019003     C0001      03-APR-04 S0001      F Y 07-APR-02 Fulfilled
046866     C0004      03-MAY-04 S0002      P N 22-MAY-02 Cancelled
019008     C0005      24-MAY-04 S0004      F N 26-JUL-02 In Process

6 rows selected.

SQL> select * from SALES_ORDER_DETAILS;

ORDERNO    PRODUCTNO  QTYORDERED    QTYDISP PRODUCTRATE
---------- ---------- ---------- ---------- -----------
019001     P0001               4          4         525
019001     P07965              2          1        8400
019001     P07885              2          1        5250
019002     P0001              10         10         525
046865     P07868              3          3        3150
046865     P07885              3          1        5250
046865     P0001              10         10         525
046865     P0345               4          4        1050
019003     P0345               2          2        1050
019003     P06734              1          1       12000
046866     P07965              1          0        8400

ORDERNO    PRODUCTNO  QTYORDERED    QTYDISP PRODUCTRATE
---------- ---------- ---------- ---------- -----------
046866     P07975              1          0        1050
019008     P0001              10          5         525
019008     P07975              5          3        1050

14 rows selected.



-- 1) Find all details of the sales orders made by the client named "Ivan Bayoss."

select * from SALES_ORDER_DETAILS sod
inner join sales_order so on sod.ORDERNO = SALES_ORDER_DETAILS.ORDERNO
inner join  CLIENT_MASTER cm on so.CLIENTNO = cm.clientno where cm.Name = "Ivan Bayoss" ;


-- 2) 

What are the descriptions and quantities on hand of the products ordered on the date '2004-02-18'?

select pm.DESCRIPTION , pm.QTYONHAND from SALES_ORDER_DETAILS sod
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO
inner join PRODUCT_MASTER pm on sod.PRODUCTNO = pm.PRODUCTNO 
where so.ORDERDATE = '2004-02-18';


Display descriptions and quantities of products sold in the same month as '2004-04-18.'

SELECT pm.DESCRIPTION, pm.QTYONHAND
FROM SALES_ORDER_DETAILS sod
INNER JOIN SALES_ORDER so ON so.ORDERNO = sod.ORDERNO
INNER JOIN PRODUCT_MASTER pm ON sod.PRODUCTNO = pm.PRODUCTNO
WHERE MONTH(so.ORDERDATE) = MONTH('2004-04-18');



-- 3) Identify the product with the highest reorder level, and display its product number and description.


SELECT PRODUCTNO, DESCRIPTION
FROM PRODUCT_MASTER
WHERE REORDERLVL = (SELECT MAX(REORDERLVL) FROM PRODUCT_MASTER);

-- Or using join


SELECT pm.PRODUCTNO, pm.DESCRIPTION
FROM PRODUCT_MASTER pm
JOIN (
    SELECT MAX(REORDERLVL) AS MaxReorderLvl
    FROM PRODUCT_MASTER
) maxLvl ON pm.REORDERLVL = maxLvl.MaxReorderLvl;


-- 4) List the client numbers and names of clients who placed an order containing the product described as "Trousers."

select cm.Name ,cm.clientno from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on sod.PRODUCTNO = pm.PRODUCTNO 
inner join SALES_ORDER so on sod.ORDERNO = so.ORDERNO
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
where  pm.DESCRIPTION = 'Trousers'
;

SELECT cm.CName, cm.ClientNo
FROM SALES_ORDER_DETAILS sod
INNER JOIN PRODUCT_MASTER pm ON sod.PRODUCTNO = pm.PRODUCTNO
INNER JOIN SALES_ORDER so ON sod.ORDERNO = so.ORDERNO
INNER JOIN CLIENT_MASTER cm ON cm.CLIENTNO = so.CLIENTNO
WHERE pm.DESCRIPTION = 'Trousers';

-- or------------------------------

select cm.clientno  , cm.Name from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on sod.PRODUCTNO = pm.PRODUCTNO 
inner join SALES_ORDER so on sod.ORDERNO = so.ORDERNO
inner join CLIENT_MASTER cm on pm.DESCRIPTION = 'Trousers';


-- 5) Display all details of sales orders for the product "Pull Overs" where the quantity ordered is less than 5.


select pm.DESCRIPTION , so.ORDERNO , so.CLIENTNO , so.ORDERDATE , so.SALESMANNO , so.DELYTYPE , so.BILLYN , sod.QTYORDERED
from SALES_ORDER_DETAILS sod 
inner join sales_order so on sod.ORDERNO = so.ORDERNO 
inner join PRODUCT_MASTER pm on  pm.PRODUCTNO = sod.PRODUCTNO
inner join CLIENT_MASTER cm on cm.clientno = so.clientno
where  pm.DESCRIPTION = 'Pull Overs' and sod.QTYORDERED < 5;


-- 6) Retrieve the names of clients and descriptions of products they ordered for the clients "Ivan Bayoss" and "Mamta Muzumdar."


select  cm.Name, pm.DESCRIPTION , pm.PRODUCTNO from SALES_ORDER_DETAILS sod
inner join PRODUCT_MASTER pm on pm.PRODUCTNO = sod.PRODUCTNO
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO
inner join CLIENT_MASTER cm on cm.Name in ('Ivan Bayoss','Mamta Muzumdar');


-- 7) Display the product descriptions and quantities on hand for all products ordered by clients with client numbers "C0001" and "C0002."

select pm.DESCRIPTION , cm.QTYONHAND from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on pm.PRODUCTNO = sod.PRODUCTNO
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO 
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
where clientno in ('C0001' , 'C0002');



-- 8) Retrieve the client numbers, product descriptions, and quantities on hand for all products ordered by clients "C0001" and "C0002."
 
select cm.clientno , pm.DESCRIPTION , pm.QTYONHAND from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on pm.PRODUCTNO = sod.PRODUCTNO
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO 
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
where cm.clientno in ('C0001' , 'C0002');



--------------------------------------------------------subqueries excercise


-- a) Find the product numbers and descriptions of products that have not been sold yet.

select PRODUCTNO , DESCRIPTION from PRODUCT_MASTER pm where not exists (
    select PRODUCTNO from SALES_ORDER_DETAILS sod where sod.PRODUCTNO = pm.PRODUCTNO
);

-- b) Retrieve the client number, name, city, and state for the client who placed order number '019001.'

select cm.clientno , cm.name , cm.city , cm.Cstate from sales_order so 
inner join CLIENT_MASTER cm on cm.clientno = so.clientno
where so.ORDERNO = '019001';


c)Display the name and city of the client who placed the sales order with the order number '019001.'

SELECT Name, City
FROM CLIENT_MASTER
WHERE CLIENTNO = (
    SELECT CLIENTNO
    FROM SALES_ORDER
    WHERE ORDERNO = '019001'
);


D) List the names of clients who placed orders in months before May (month < 5).
select name from CLIENT_MASTER  
where clientno in (
    select clientno from SALES_ORDER where  MONTH(ORDERDATE) < 5
);


e. (Query e):
Retrieve all details of the product described as "Lycra Tops."

select * from PRODUCT_MASTER where DESCRIPTION = 'Lycra Tops';



f. (Query f):
Display the client numbers and names of clients who ordered the product described as "Lycra Tops."

select cm.clientno , cm.name 
from CLIENT_MASTER cm 
inner join sales_order so on so.clientno = cm.clientno
inner join SALES_ORDER_DETAILS sod on sod.ORDERNO = so.ORDERNO 
where sod.PRODUCTNO = (
    select pm.PRODUCTNO from PRODUCT_MASTER pm where pm.DESCRIPTION = 'Lycra Tops' 
);

-- or

SELECT cm.CLIENTNO, cm.Name
FROM CLIENT_MASTER cm
WHERE cm.CLIENTNO IN (
    SELECT so.CLIENTNO
    FROM SALES_ORDER so
    JOIN SALES_ORDER_DETAILS sod ON so.ORDERNO = sod.ORDERNO
    JOIN PRODUCT_MASTER pm ON sod.PRODUCTNO = pm.PRODUCTNO
    WHERE pm.DESCRIPTION = 'Lycra Tops'
);



--  g. (Query g):
Retrieve the names of clients who placed orders where the total value of the order (calculated as quantity ordered × selling price) is greater than or equal to 5000.



SELECT cm.Name 
FROM CLIENT_MASTER cm
JOIN SALES_ORDER so ON cm.CLIENTNO = so.CLIENTNO
JOIN (
    SELECT sod.ORDERNO, SUM(sod.QTYORDERED * pm.SELLPRICE) AS TotalValue
    FROM SALES_ORDER_DETAILS sod
    JOIN PRODUCT_MASTER pm ON sod.PRODUCTNO = pm.PRODUCTNO
    GROUP BY sod.ORDERNO
    HAVING TotalValue >= 5000
) AS OrderTotals ON so.ORDERNO = OrderTotals.ORDERNO;













// ----------------------------------------------- employee - customers tables---------------


1. Fetch & display all the employee details

2. Fetch & display employee details for the employees having job Title='Sales Rep' and Employee number between 1200 and 1500

3. Fetch & display employee details for the employees having office code 2 or more than 2 and job title is not Sales Rep

4. Fetch & display customers details(Customers table) who does not belongs to USA

5. Fetch & display customers details(Customers table)  having customer number not in the range 150 to 200

6. List out last name, first name for all employees and rename  last name as “Name of the employee”, display as sorting order of their last name

7.  List out the customers having credit limit is more than 70000 display in descending order by their last name.

8. List out all customers belongs to city Singapore, Liverpool or NYC

9. List the details about customer first name “SMITH”

10. List out the employees who are working in office code 1, 3 , 5

11. List out the customer having credit limit between 50000 and 95000

12. List out the employees who are not working in office code 1 , 3

13. List out the customers whose first name starts with “S”

14. List out the customers whose name start with “S” and end with “H”

15. List out the customers whose first name length is 5 and start with “S”

16. List out the customers whose first name length is exactly 8

17. List out the customers whose first name starting with a and ending with e

18. List out the customers whose first name contains ee

19. Show Count of employees who are working in different office in the organization

20. List out the maximum credit limit of customers belongs to different states


