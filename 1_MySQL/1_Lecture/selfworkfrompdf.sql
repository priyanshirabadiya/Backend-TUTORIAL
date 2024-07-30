-- My sql does not support number and varchar2 for that you need to use int , decimal and for string varchar instead of number and varchar2
-- Create tables and insert data


-- 1) CLIENT_MASTER Table

create table CLIENT_MASTER (
    clientno varchar(10) ,
    CName varchar(50) ,  
    city varchar(15) , 
    pincode decimal(8 , 0) , 
    Cstate varchar(15) , 
    Baldue decimal(10 , 2)
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

CREATE TABLE PRODUCT_MASTER (PRODUCTNO VARCHAR(10) , DESCRIPTION VARCHAR(20) , PROFITPERCENT INT , UNITMEASURE VARCHAR(15) , QTYONHAND INT , REORDERLVL INT , SELLPRICE INT , COSTPRICE INT );

INSERT INTO PRODUCT_MASTER values 
('P0001' , 'T-Shirt' , 5  , 'Piece' , 200 , 50, 350 , 250);

INSERT INTO PRODUCT_MASTER (PRODUCTNO , DESCRIPTION , PROFITPERCENT ,UNITMEASURE , REORDERLVL , SELLPRICE ,COSTPRICE  ) values 
("P0345" , 'Shirts' , 6 , 'Piece'  , 50 , 500 , 350  );

INSERT INTO PRODUCT_MASTER values
("P06734" , 'Cotton Jeasns' , 5 , 'Piece' , 100 , 20 , 600 , 450),
("P07865" , 'Jeasn' , 5 , 'Piece' , 100  , 20 , 750 , 500),
("P07868" , 'Trousers' , 2 , 'Piece' , 150 , 20 , 750 , 500 ),
("P07885" , 'Pull Overs' , 2.5 , 'Piece' , 80 , 30 , 700 , 450 ),
("P07965" , 'Denim Shirts' , 4 , 'Piece' , 100 , 40 , 350 , 250 ) ,
("P07975" , 'Lycra Tops' , 5 , 'Piece' , 70 , 30 , 300 , 175 ),
("P08865" , 'Skirts' , 5 , 'Piece' , 75 , 30 , 450 , 300 )
;

-- 3) SALESMAN_MASTER Table
CREATE TABLE SALESMAN_MASTER (SALEMANNO VARCHAR(10) , SALESMANNAME VARCHAR(20) , ADDRESS1 VARCHAR(30) , ADDRESS2 VARCHAR(30) , CITY VARCHAR(20) , PINCODE INT , STATE VARCHAR(20) , SALAMT decimal(8 ,2) , TGTTOGET decimal(6,2) , YTDSALES decimal(6,2) , REMARKS VARCHAR(60));

INSERT INTO SALESMAN_MASTER values
('S0001' , 'Aman' , 'A/14' , 'Worli' , 'Mumbai' , 400002  , 'Maharastra' , 3000 , 100 , 50 , 'Good');
 

INSERT INTO SALESMAN_MASTER values 
('S0002' , 'Omkar' , '65' , 'Nariman' , 'Mumbai' , 400001 , 'Maharastra'  , 3000 , 200  , 100 , 'Good'),
('S0003' , 'Raj' , 'P-7' , 'Bandra' , 'Mumbai' , 400032 , 'Maharastra' , 3000 , 200 , 100 , 'Good'),
('S0004' , 'Ashish' , 'A/5' , 'Juhu' , 'Mumbai' , 400044 , 'Maharastra' , 3500 , 200 , 150 , 'Good');

