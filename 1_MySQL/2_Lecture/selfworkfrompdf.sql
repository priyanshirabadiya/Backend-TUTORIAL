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

