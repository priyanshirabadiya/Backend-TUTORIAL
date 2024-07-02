
-- 1) CLIENT_MASTER table

-- create table CLIENT_MASTER (
--     clientno varchar(10) primary key ,
--     Name varchar(50) not null ,  
--     city varchar(15) , 
--     pincode decimal(8 , 0) , 
--     Cstate varchar(15) , 
--     Baldue decimal(10 , 2)
-- );

-- insert into CLIENT_MASTER values 
-- ("C0001" , "Ivan Bayoss" , "Mumbai" , 40054 , "Maharastra" , 15000);

-- insert into CLIENT_MASTER values 
-- ("C0002" , "Mamta Muzumdar" , "Madras" , 780001 , "Tamil nadu" , 0);

-- insert into CLIENT_MASTER values 
-- ("C0003" , "Chhaya Bankar" , "Mumbai" , 40057 , "Maharashtra" , 5000);

-- insert into CLIENT_MASTER values 
-- ("C0004" , "Ashwini Joshi" , 'Banglore' , 56001  , "Karnataka" , 0),
-- ("C0005" , "Hansel Colaco" , "Mumbai" , 400060  , "Maharatra" , 2000),
-- ("C0006" , "Deepak sharma" , "Manglore" , 560050 , 'Karnataka' , 0) 
-- ;  



-- 2)PRODUCT_MASTER TABLE

-- CREATE TABLE PRODUCT_MASTER (
--     PRODUCTNO VARCHAR(10) PRIMARY KEY ,
--     DESCRIPTION VARCHAR(20) NOT NULL , 
--     PROFITPERCENT INT NOT NULL , 
--     UNITMEASURE VARCHAR(15) NOT NULL , 
--     QTYONHAND INT NOT NULL , 
--     REORDERLVL INT NOT NULL , 
--     SELLPRICE INT NOT NULL , 
--     COSTPRICE INT NOT NULL 
-- );

-- INSERT INTO PRODUCT_MASTER values 
-- ('P0001' , 'T-Shirt' , 5  , 'Piece' , 200 , 50, 350 , 250);

-- INSERT INTO PRODUCT_MASTER values
-- ("P0345" , 'Shirts' , 6 , 'Piece'  , 50 , 50 , 350 , 250 ),
-- ("P06734" , 'Cotton Jeasns' , 5 , 'Piece' , 100 , 20 , 600 , 450),
-- ("P07865" , 'Jeasn' , 5 , 'Piece' , 100  , 20 , 750 , 500),
-- ("P07868" , 'Trousers' , 2 , 'Piece' , 150 , 20 , 750 , 500 ),
-- ("P07885" , 'Pull Overs' , 2.5 , 'Piece' , 80 , 30 , 700 , 450 ),
-- ("P07965" , 'Denim Shirts' , 4 , 'Piece' , 100 , 40 , 350 , 250 ) ,
-- ("P07975" , 'Lycra Tops' , 5 , 'Piece' , 70 , 30 , 300 , 175 ),
-- ("P08865" , 'Skirts' , 5 , 'Piece' , 75 , 30 , 450 , 300 )
-- ;

select * from PRODUCT_MASTER;


-- 3) SALESMAN_MASTER Table

-- CREATE TABLE SALESMAN_MASTER (
--     SALEMANNO VARCHAR(10) PRIMARY KEY ,
--     SALESMANNAME VARCHAR(20) NOT NULL ,
--     ADDRESS1 VARCHAR(30) NOT NULL ,
--     ADDRESS2 VARCHAR(30) ,
--     CITY VARCHAR(20) ,
--     PINCODE INT ,
--     STATE VARCHAR(20) ,
--     SALAMT decimal(8 ,2) NOT NULL ,
--     TGTTOGET decimal(6,2) NOT NULL ,
--     YTDSALES decimal(6,2) NOT NULL ,
--     REMARKS VARCHAR(60)
-- );

-- INSERT INTO SALESMAN_MASTER values
-- ('S0001' , 'Aman' , 'A/14' , 'Worli' , 'Mumbai' , 400002  , 'Maharastra' , 3000 , 100 , 50 , 'Good');
--  
-- INSERT INTO SALESMAN_MASTER values 
-- ('S0002' , 'Omkar' , '65' , 'Nariman' , 'Mumbai' , 400001 , 'Maharastra'  , 3000 , 200  , 100 , 'Good'),
-- ('S0003' , 'Raj' , 'P-7' , 'Bandra' , 'Mumbai' , 400032 , 'Maharastra' , 3000 , 200 , 100 , 'Good'),
-- ('S0004' , 'Ashish' , 'A/5' , 'Juhu' , 'Mumbai' , 400044 , 'Maharastra' , 3500 , 200 , 150 , 'Good');

-- select * from CLIENT_MASTER;



-- 4) SALES_ORDER Table


-- CREATE TABLE SALES_ORDER (
--     ORDERNO VARCHAR(10) PRIMARY KEY,
--     CLIENTNO VARCHAR(10) REFERENCES CLIENT_MASTER(CLIENTNO),
--     ORDERDATE DATE NOT NULL,
--     DELYADDER VARCHAR(30),
--     SALESMANNO VARCHAR(10) REFERENCES SALESMAN_MASTER(SALESMANNO),
--     DELYTYPE CHAR(1),
--     BILLYN CHAR(1),
--     DELYDATE DATE,
--     ORDERSTATUS VARCHAR(20)
-- );

-- ALTER TABLE SALES_ORDER DROP COLUMN DELYADDER; 
-- desc sales_order;

-- INSERT INTO SALES_ORDER values
-- ('019001', 'C0001', '2004-06-12', 'S0001', 'F', 'N', '2002-07-20', 'In Process'),
-- ('019002', 'C0002', '2004-06-25', 'S0002', 'P', 'N', '2002-06-27', 'Cancelled'),
-- ('046865', 'C0003', '2004-02-18', 'S0001', 'F', 'Y', '2002-02-20', 'Fulfilled'),
-- ('019003', 'C0001', '2004-04-03', 'S0001', 'F', 'Y', '2002-04-07', 'Fulfilled'),
-- ('046866', 'C0004', '2004-05-03', 'S0002', 'P', 'N', '2002-05-22', 'Cancelled'),
-- ('019008', 'C0005', '2004-05-24', 'S0004', 'F', 'N', '2002-07-26', 'In Process');

-- select * from sales_order;




-- 5) SALES_ORDER_DETAILS table

CREATE TABLE SALES_ORDER_DETAILS(
    ORDERNO VARCHAR(10) REFERENCES SALES_ORDER(ORDERNO),
    PRODUCTNO VARCHAR(10) REFERENCES PRODUCT_MASTER(PRODUCTNO),
    QTYORDERED INT,
    QTYDISP INT , 
    PRODUCTRATE INT
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





