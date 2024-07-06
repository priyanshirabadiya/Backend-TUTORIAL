-- question 1

create database student_management ;
use student_management;

-- question 2

create table students (
    student_id int primary key ,
    first_name varchar(50) , 
    last_name varchar(50) , 
    dob date ,
    gender varchar(10) ,
    class_id int
);


create table classes (
    class_id int primary key ,
    class_name varchar(50) ,
    teacher_id int
);

create table teachers (
    teacher_id int primary key ,
    first_name varchar(50) ,
    last_name varchar(50) ,
    subject varchar(50)
);

-- question 3
-- Insert data

Insert into students values
( 1 , 'Arjun' , 'Kumar' , '2005-04-23' , 'male' , 1),
( 2 , 'Priya' , 'Sharma' , '2006-06-15' , 'female' , 1),
( 3 , 'rohan' , 'Singh' , '2007-09-12' , 'male' , 2),
( 4 , 'Anjali' , 'varma' , '2005-06-15' , 'female' , 2),
( 5 , 'Amit' , 'Patel' , '2008-02-03' , 'male' , 1);


Insert into classes values 
(1 , 'Mathematics' , 1 ),
(2 , 'Science' , 2 ),
(3 , 'English' , 3 ),
(4 , 'History' , 4 ),
(5 , 'Geography' , 5 );



Insert into teachers values
(1 , 'Ravi' , 'Mehta' , 'mathematics'),
(2 , 'suman' , 'Rao' , 'Science'),
(3 , 'Kavita' , 'Desai' , 'English'),
(4 , 'Rajesh' , 'khan' , 'History'),
(5 , 'Sneha' , 'Joshi' , 'geography')
;



select * from students;
select * from classes;
select * from teachers;


-- Question : 4

-- 1 )
select * from students where class_id = 1;


-- 2)
select first_name , last_name from teachers;



-- Question : 5

create table enrollments ( 
    enrollment_id int primary key,
    enrollment_date date ,
    student_id int ,
    teacher_id int ,
    foreign key (student_id) references students(student_id),
    foreign key (teacher_id) references teachers(teacher_id)
);


Insert into enrollments values
( 1 , '2024-07-05' , 1 , 1 ),
( 2 , '2024-07-06' , 2 , 2 ),
( 3 , '2024-07-07' , 3 , 3 ),
( 4 , '2024-07-08' , 4 , 4 ),
( 5 , '2024-07-09' , 5 , 5 )
;


select e.* , s.* , t.subject as class_names from enrollments e 
inner join students s on e.student_id = s.student_id 
inner join teachers t on t.teacher_id = e.teacher_id ; 



-- Question - 6

-- Ans : 1

update students set last_name = 'Singh' where student_id = 1;

select * from students;

-- Ans : 2

update teachers set subject = 'physics' where teacher_id = 2;

select * from teachers;


-- Question : 7

-- Ans : 1

select count(student_id) as total_number_of_students from students;

-- Ans : 2

-- Find maximum age
select max(datediff(curdate() , dob)) from students ;


select * from students s where datediff(curdate() , dob) = (
    select max(datediff(curdate() , dob)) from students 
);

-- right ans is 

select * from students where dob = ( select min(dob) from students) ;

-- Question : 8

-- drop if it is in table

DELETE FROM enrollments WHERE student_id NOT IN (SELECT student_id FROM students);

-- drop the constraint of foreign key 

alter table enrollments drop constraint foreign_en;

-- Can't drop foreign key using alter table foreign key you must use constraint

ALTER TABLE enrollments
DROP FOREIGN KEY (student_id);

-- drop primary key constraint

alter table students drop primary key;


-- -------------------------- execute queries --------------------------


delete from students where student_id = 5; 
delete from enrollments where enrollment_id = 4;


-- Add again 


alter table students add primary key (student_id);

alter table enrollments add constraint foreign_en foreign key (student_id) references students(student_id) ;
alter table enrollments add foreign key (student_id) references students(student_id);

    

