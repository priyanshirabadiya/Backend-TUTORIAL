-- Way to use foreign key

CREATE TABLE SALESMAN_MASTERFORIGN (
    SALEMANNO VARCHAR(10) PRIMARY KEY ,
    SALESMANNAME VARCHAR(20) NOT NULL ,
    ADDRESS1 VARCHAR(30) NOT NULL ,
    ADDRESS2 VARCHAR(30) ,
);

INSERT INTO SALESMAN_MASTERFORIGN values
('S0001' , 'Aman' , 'A/14' , 'Worli'), 
('S0002' , 'Omkar' , '65' , 'Nariman'),
('S0003' , 'Raj' , 'P-7' , 'Bandra'),
('S0004' , 'Ashish' , 'A/5' , 'Juhu');


-- if tables are exist 
show TABLES LIKE 'foreignmetod1';

-- 1 ) way use it in oracle 
create table foreignmetod1(
    rno int ,
    uniquecode varchar(10) references SALESMAN_MASTERFORIGN(SALEMANNO) ,
    name varchar(20),
    address varchar(50),
);


-- 2) In my sql : this will get default constraint

create table foreignmetod1(
    rno int ,
    uniquecode varchar(10) ,
    name varchar(20),
    address varchar(50),
    foreign key (uniquecode) references SALESMAN_MASTERFORIGN(SALEMANNO)
);

-- 3) using constraint : give constrain name as you want and if you don't give any constrain names then it will be taken by it self constrain name as above

create table foreignmetod1(
    rno int ,
    uniquecode varchar(10) ,
    name varchar(20),
    address varchar(50),
    constraint fk_foreign foreign key (uniquecode) references SALESMAN_MASTERFORIGN(SALEMANNO)
);

-- in our output

CREATE TABLE `foreignmetod1` (
   `rno` int DEFAULT NULL,
   `uniquecode` varchar(10) DEFAULT NULL,
   `name` varchar(20) DEFAULT NULL,
   `address` varchar(50) DEFAULT NULL,
   KEY `fk_foreign` (`uniquecode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


-- Query for get constraint name 

SELECT CONSTRAINT_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'foreignmetod1' AND COLUMN_NAME = 'uniquecode';

ALTER TABLE foreignmetod1 DROP FOREIGN KEY fk_foreign;



