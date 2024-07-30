-- how to connect with sql , insertion method , selection methods  

1. \sql
2. \connect root@localhost:3306

3. show databases;
4. create database node;
-- If you have not any database to work then you can create new database.

5. use node;
-- set node as databse ex:localhost:3306 ssl  node  SQL 

6. show tables;
-- It will show tables which is being created in node database If you don't create any table then it will be empty.

-- create new table
7. create table user (
    firstname varchar(30),
    lastname varchar(30),
    email varchar(40),
    gender varchar(10),
    mobileno int
);

-- To describe data 

8. desc user;
9. describe user;


-- insert data

-- 1. method to insert data 
insert into user(firstname , lastname , email , gender , mobileno ) values ("priyanshi" , "rabadiya" , "priyanshi@gmail.com" , "female" , 798564123);


-- 2. when you need to insert all data then you can directly use it.
insert into user values ("kritika" , "nova" , 'kriti@gmail.com' , 'female' , 456321789);


-- 3. insert more than one data
insert into user values 
("nick" , "mohansigh" , 'nick@gmail.com' , 'male' , 126547890),
('jensi' , 'naraj' , 'jes@gmail.com' , 'male' , 78965413),
("meet" , 'surani' , 'meet@gmail.com' , 'male' , 292482513 );
 

-- 4. Specific column data insert

insert into user(firstname , lastname , gender , mobileno) values 
("neha" , 'jethvani' , 'female' , 456321789);

-- to select data

select * from user;

select firstname from user;

select *, firstname from user;

select firstname as Mainame from user;


