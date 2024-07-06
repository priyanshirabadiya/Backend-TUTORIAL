create table tbldept(
    dno int primary key , 
    dname varchar(20)
);

create table tblstud(
    rno int primary key, 
    fname varchar(20) , 
    sname varchar(20) , 
    dno int , 
    sem int , 
    contect_no  int , 
    gender varchar(20), 
    bdate date,
    foreign key (dno) references tbldept(dno) ,
    check(gender in('male','female')) 
);

-- insert records into tbldept

insert into tbldept values(1, 'inform technology');
insert into tbldept values(2, 'electrical');
insert into tbldept values(3, 'civil');
insert into tbldept values(4, 'mechanical');
insert into tbldept values(5, 'chemical');

-- insert records into tblstud

insert into tblstud VALUES(1 , 'ankur' , ' kahar',1 , 1 ,99246153 ,'male','2001-01-12');
INSERT INTO tblstud VALUES (2, 'dhaval', 'joshi', 1, 1, 24855383, 'male', '2002-05-23');
INSERT INTO tblstud VALUES (3, 'ankita', 'shah', 1, 1, 24615383, 'female', '2000-11-01');
INSERT INTO tblstud VALUES (10, 'komal', 'panday', 2, 3, 9824615, 'female', '2005-07-15');
INSERT INTO tblstud VALUES (13, 'amit', 'mehta', 3, 3, 972463, 'male', '2009-02-15');
INSERT INTO tblstud VALUES (23, 'jinal', 'gandhi', 2, 1, 4615383, 'female', '2000-11-28');
INSERT INTO tblstud VALUES (22, 'ganesh', 'patel', 2, 3, 615383, 'male', '2002-11-28');
INSERT INTO tblstud VALUES (4, 'sweta', 'patel', 3, 1, 92115383, 'female', '2003-02-18');
INSERT INTO tblstud VALUES (7, 'pooja', 'desai', 3, 3, 92115378, 'female', '2004-02-18');
INSERT INTO tblstud VALUES (8, 'komal', 'bhatia', 2, 3, 99115378, 'female', '2006-07-18');





CREATE TABLE tblstud_result (
    Rno INT,
    S101 INT,
    S102 INT,
    S103 INT,
    S104 INT,
    S105 INT,
    FOREIGN KEY (Rno) REFERENCES tblstud(rno)
);

-- Inserting data into the tblstud_result table
INSERT INTO tblstud_result VALUES (1, 76, 87, 87, 89, 93);
INSERT INTO tblstud_result VALUES (2, 67, 76, 80, 86, 88);
INSERT INTO tblstud_result VALUES (3, 55, 78, 77, 85, 80);
INSERT INTO tblstud_result VALUES (13, 43, 76, 69, 55, 76);
INSERT INTO tblstud_result VALUES (22, 32, 23, 12, 23, 15);
INSERT INTO tblstud_result VALUES (19, 20, 22, 56, 34, 36);
INSERT INTO tblstud_result VALUES (7, 33, 56, 45, 34, 30);
INSERT INTO tblstud_result VALUES (8, 80, 90, 95, 92, 80);


-- 1)
alter table tblstud_result 
add Total int , 
add per decimal(5,2);

SET SQL_SAFE_UPDATES = 0;

update tblstud_result 
set Total = s101 + s102 + S103 + S104 + S105;

update tblstud_result 
set per = (total / 5) ;

-- 2)

select * from tblstud where dno = 
(select dno from tbldept where dname = 'Electrical');


-- 3) Display the result of Pooja. 

select * from tblstud_result where rno = 
( select rno from tblstud where fname = 'pooja');


-- 4) Display the students’ detail who got maximum marks in Subject 101.

select * from tblstud where rno = 
(select s101 from tblstud_result where s101 =  
( select max(s101) from tblstud_result ));


-- 5) Display the students’ detail who got minimum marks in Subject 103. 

select * from tblstud where rno = 
(select rno from tblstud_result where s103 = 
(select min(s103) from tblstud_result)
);


-- 6) Display the students’ detail who got maximum percentage. 

select * from tblstud where rno = 
(select rno from tblstud_result where per = 
( select max(per) from tblstud_result));


-- 7) Display the students’ detail who got minimum total.

select * from tblstud where rno =
(select rno from tblstud_result where total = 
(select min(total) from tblstud_result )); 

-- 8) Display the student detail whose total is more than the average total of all students. 

select * from tblstud where rno in 
( select rno from tblstud_result where total > 
(select average(total) from tblstud_result));


-- 9) Display the result of students whose surname is Patel. 

select * from tblstud_result
where rno in (
    select rno from tblstud where sname = 'Patel'
); 


-- 10) Display the department detail where total numbers of students are only 3. 

select dname from tbldept 
where dno = (
    select count(dno) from tblstud group by dno
)


-- 11) Display the department detail where total numbers of students are only 3. 

select dname , dno from tbldept 
where dno in (
    select dno from tblstud group by(dno) having count(dno) = 3
);


-- 11. Display the department name of highest percentage student. 

select dname from tbldept where dno = 
(select dno from tblstud where rno = 
(select rno  from tblstud_result where per = 
( select max(per) from tblstud_result )));


-- 12) Display the students’ detail of Civil and Information Technology.

select * from tblstud where dno in 
(select dno from tbldept where dname in ('Civil' , 'inform technology' ));


-- 13) Display the result for Male students.

select * from tblstud_result where rno = 
(select rno from tblstud where gender='male');

-- 14) Display the students’ detail whose total is less than 250

select * from tblstud where rno in 
(select rno from tblstud_result where total < 250 );

-- 15) Display the student’s result who’s subject 103’s marks are one of the “80,87,95”


select * from tblstud_result where s103 in (80,87,95);


-- 16) Display the student’s result who’s subject 103’s marks are more than “45,69 and
-- 77”.

select * from tblstud_result where s103 > 45 and s103 > 69 and s103 > 77 ;

-- 17. Display the student’s result who’s subject 103’s marks are more than atleast one
-- of “45,69 and 77”.

select * from tblstud_result where s103 > 45 or s103 > 69 or s103 > 77 ;


-- 18. Display the students’ detail whose results are available. (Use EXISTS)

select count(rno) from tblstud where rno EXISTS (
    select rno from tblstud_result
)  -- 10

select * from tblstud where EXISTS (
    select rno from tblstud_result
) ;

select count(rno) from tblstud_result;  --7


-- 19. Display the students’ detail whose results are not available.


select * from tblstud where not EXISTS (
    select rno from tblstud_result
) ;

-- 20. Create student table with fields Rno, name, phone_no. And insert the records
-- from tblstud_info table.


create table student (
    rno int , 
    name varchar(20) , 
    contect_no bigint ,
    foreign key (rno) references tblstud(rno)
);

insert into student (rno , name , contect_no) 
select rno , fname , contect_no from tblstud;


-- 21. Create student1 table with fields rno, total, per. Insert the records of male
-- students from tblstud_result table.

CREATE TABLE student1 (
    rno INT PRIMARY KEY,
    total INT,
    per DECIMAL(5, 2)
);

insert into student1 (rno , total , per)
select rno , total , per from tblstud_result where rno in
(select rno frm tblstud where gender = 'male');  


-- 22. Create student2 table with fields rno, name, gender. Insert the records from
-- tblstud_info table who belongs to Information Technology department.

CREATE TABLE student2 (
    rno INT PRIMARY KEY,
    name VARCHAR(50),
    gender VARCHAR(20)
);

insert into student2 
select (rno , fname , gender) from tblstud where dno = 
(select dno from tbldept where dname = 'inform technology');

-- 23. Update in the student1 table and add 10 in percentage field that belongs to
-- Electrical Department.

update student1 set per = per + 10 where rno = 
(select rno from tblstud where dno = 
(select dno from tbldept where dname = 'electrical');
 )

-- 24. Delete the records of Civil department from Student table.

delete from student where rno = (
    select rno from tblstud where dno = 
    (select dno from tbldept where dname = 'civil')
) ;


-- 25. Update the phone number to “9988776655” in Student table of female students.

update student set contect_no = 9988776655 where rno in (
    select rno from tblstud where gender = 'female'
);

-- 26. Delete the records of “Female” from student table.

delete from student where rno in(
    select rno from tblstud where gender = 'female'   
);

-- 27. Display the results of the female students whose age is more than 15 years.

select * from tblstud 
where gender = 'female'
and datediff(curdate() , bdate) > 15; 


-- 28. Display the students’ results whose birth is in the last week of month.

SELECT *
FROM tblstud
WHERE DAY(bdate) >= (DAY(LAST_DAY(bdate)) - 6) -- Start of last week
AND DAY(bdate) <= DAY(LAST_DAY(bdate));       -- End of last week

-- 29. Display the names of departments where at least one student is studying. 

select * from tbldept a where EXISTS (
    select dno from tblstud dno = a.dno
); 

-- 30. Display the department detail where not a single student is studying. 

select * from tbldept a where not exists(
select dno from tblstud where dno = a.dno 
);




