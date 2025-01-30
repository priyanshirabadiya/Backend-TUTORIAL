create database joins;

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

alter table tblstud add primary key (rno);

create table result(
    rno int ,
    unicode int primary key ,
    statm int ,
    accm int ,
    foreign key (rno) references tblstud(rno) 
);

create table uniquecode(
    unicode int ,
    name varchar(50) ,
    gender varchar,
    foreign key (unicode) references result(unicode)
);

-- insert records into tbldept

insert into tbldept values(1, 'inform technology');
insert into tbldept values(2, 'electrical');
insert into tbldept values(3, 'civil');
insert into tbldept values(4, 'mechanical');
insert into tbldept values(5, 'chemical');

-- insert records into tblstud

insert into tblstud values(1 , 'ankur' , ' kahar',1 , 1 ,99246153 ,'male','2001-01-12');
INSERT INTO tblstud VALUES (1, 'dhaval', 'joshi', 1, 1, 24855383, 'male', '2002-05-23');
INSERT INTO tblstud VALUES (3, 'ankita', 'shah', 1, 1, 24615383, 'female', '2000-11-01');
INSERT INTO tblstud VALUES (10, 'komal', 'panday', 2, 3, 9824615, 'female', '2005-07-15');
INSERT INTO tblstud VALUES (13, 'amit', 'mehta', 3, 3, 972463, 'male', '2009-02-15');
INSERT INTO tblstud VALUES (23, 'jinal', 'gandhi', 2, 1, 4615383, 'female', '2000-11-28');
INSERT INTO tblstud VALUES (22, 'ganesh', 'patel', 2, 3, 615383, 'male', '2002-11-28');
INSERT INTO tblstud VALUES (4, 'sweta', 'patel', 3, 1, 92115383, 'female', '2003-02-18');
INSERT INTO tblstud VALUES (7, 'pooja', 'desai', 3, 3, 92115378, 'female', '2004-02-18');
INSERT INTO tblstud VALUES (8, 'komal', 'bhatia', 2, 3, 99115378, 'female', '2006-07-18');

-- insert records into tblstud result

INSERT INTO result VALUES (1, 1001, 85, 90);
INSERT INTO result VALUES (2, 1002, 75, 80);
INSERT INTO result VALUES (3, 1003, 95, 88);
INSERT INTO result VALUES (4, 1004, 65, 70);
INSERT INTO result VALUES (5, 1005, 55, 60);

-- insert records into tblstud uniquecode

INSERT INTO uniquecode VALUES (1001, 'ankur', 'male');
INSERT INTO uniquecode VALUES (1002, 'dhaval', 'male');
INSERT INTO uniquecode VALUES (1003, 'ankita', 'female');
INSERT INTO uniquecode VALUES (1004, 'komal', 'female');
INSERT INTO uniquecode VALUES (1005, 'amit', 'male');

-- JOIN TWO TABLES 

select * from tblstud inner join tbldept on tblstud.dno = tbldept.dno;

-- JOIN FOUR TABLES

select * from tblstud 
inner join tbldept on tblstud.dno = tbldept.dno
inner join result on tblstud.rno = result.rno
inner join uniquecode on result.unicode = uniquecode.unicode;


-- 2) 

SELECT RNO , FNAME , DNAME FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO;

SELECT FNAME , SNAME , contect_no , DNAME FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO WHERE FNAME LIKE '%A%' ;

SELECT * FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO WHERE DNAME = 'inform technology'; 


SELECT * FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO WHERE DNAME NOT IN ('civil' , 'mechanical'); 


SELECT DISTINCT D.DNAME FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO;
SELECT tbldept.dname , count(tbldept.dno) as total
FROM tblstud
JOIN tbldept ON tblstud.dno = tbldept.dno
GROUP BY tbldept.dname
HAVING COUNT(tblstud.dno) >= 1;

select dname from tblstud s join tbldept d on s.dno = d.dno HAVING count(tblstud.dno) = 0;


SELECT d.dname
FROM tbldept d
LEFT JOIN tblstud s ON d.dno = s.dno
GROUP BY d.dname
HAVING COUNT(s.rno) = 0;


SELECT d.dname
FROM tbldept d
LEFT JOIN tblstud s ON d.dno = s.dno
GROUP by d.DNAME
HAVING count(s.dno) = 0;


select d.dname , count(s.dno) as total from tbldept d left join tblstud s on d.dno = s.dno GROUP by d.dname;


-- 10)

select * from tblstud s inner join tbldept d on s.dno = d.dno where s.gender = 'female';

select d.dname , count(s.gender = 'female') as Total_females from tblstud s left join tbldept d on s.dno = d.dno 
GROUP by d.dname;



-- 11)


select s.rno , s.fname , s.sname , s.dno , d.dname , r.rno , r.unicode 
from tblstud s inner join tbldept d on s.dno = d.dno
inner join result r on s.rno = r.rno where s.sname = 'patel';  



-- 13)


select d.dname , count(s.dno) as total_students from tbldept d left join tblstud s on d.dno = s.dno 
GROUP by(d.dname) order by total_students;



-- 14)

select d.dname , count(s.dno) as total_students from tbldept d left join tblstud s on d.dno = s.dno 
GROUP by(d.dname) having count(s.dno) > 3 ;

-- 15)

select  s.fname , s.sname , d.dname from tblstud s inner join tbldept d on d.dno = s.dno order by d.dname , order by desc s.fname;

-- 16)

select * from tbldept d join tblstud s on d.dno = s.dno where  s.bdate< '2005-05-05';

-- 17)

SELECT * 
FROM tbldept d 
JOIN tblstud s ON d.dno = s.dno 
WHERE WEEKOFYEAR(s.bdate) = 3;





-------------------------workbatch practical -------------------------

use joins;

create table tbldept(
	dno int primary key , 
	dname varchar(20)
);

create table tblstud(
    rno int , 
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

select * from tblstud;

create table result(
    rno int ,
    unicode int primary key ,
    statm int ,
    accm int ,
    foreign key (rno) references tblstud(rno) 
);

create table uniquecode(
    unicode int ,
    name varchar(50) ,
    gender varchar(10),
    foreign key (unicode) references result(unicode)
);

select * from uniquecode;

select * from tblstud 
inner join tbldept on tblstud.dno = tbldept.dno
inner join result on tblstud.rno = result.rno
inner join uniquecode on result.unicode = uniquecode.unicode;

SELECT RNO , FNAME , DNAME FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO;


SELECT FNAME , SNAME , contect_no , DNAME FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO WHERE FNAME LIKE '%A%' ;


SELECT * FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO WHERE DNAME = 'inform technology'; 


SELECT * FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO WHERE DNAME NOT IN ('civil' , 'mechanical'); 



SELECT DISTINCT D.DNAME FROM TBLSTUD S INNER JOIN TBLDEPT D ON S.DNO = D.DNO;

SELECT DISTINCT D.dname 
FROM tblstud S
INNER JOIN tbldept D ON S.dno = D.dno;



--  select tbldept.dname , tblstud.dno from tblstud join tbldept on tblstud.dno = tbldept.dno group by (tbldept.dname) having count(tblstud.dno)>=1;

SELECT tbldept.dname , count(tbldept.dno) as total
FROM tblstud
JOIN tbldept ON tblstud.dno = tbldept.dno
GROUP BY tbldept.dname
HAVING COUNT(tblstud.dno) >= 1;




select d.dname from tblstud s join tbldept d on s.dno = d.dno group by d.dname HAVING count(s.dno) <= 0;

SELECT d.dname
FROM tbldept d
LEFT JOIN tblstud s ON d.dno = s.dno
GROUP BY d.dname
HAVING COUNT(s.rno) = 0;



SELECT d.dname
FROM tbldept d
LEFT JOIN tblstud s ON d.dno = s.dno
where s.rno = 0;


SELECT d.dname
FROM tbldept d
LEFT JOIN tblstud s ON d.dno = s.dno
GROUP by d.DNAME
HAVING count(s.dno) = 0;

select d.dname from tbldept d left join tblstud s on d.dno = s.dno; 


select d.dname , count(d.dname) as total from tbldept d left join tblstud s on d.dno = s.dno GROUP by d.dname; 

select * from tblstud s inner join tbldept d on s.dno = d.dno where s.gender = 'female';




select d.dname , count(s.dno) as total from tbldept d left join tblstud s on d.dno = s.dno GROUP by d.dname; 



select d.dname , SUM(s.gender = 'female') as Total_females from tbldept d  left join tblstud s on s.dno = d.dno 
GROUP by d.dname;


select s.rno , s.fname , s.sname , s.dno , d.dname , r.rno , r.unicode 
from tblstud s inner join tbldept d on s.dno = d.dno
inner join result r on s.rno = r.rno where s.sname = 'patel';  


select d.dname , count(s.dno) as total_students from tbldept d left join tblstud s on d.dno = s.dno 
GROUP by(d.dname) order by total_students;


select d.dname , count(s.dno) as total_students from tbldept d left join tblstud s on d.dno = s.dno 
GROUP by(d.dname) having count(s.dno) > 3 ;


select d.dname , count(s.dno) as total_students from tbldept d left join tblstud s on d.dno = s.dno 
GROUP by(d.dname) having count(s.dno) > 3 ;


select  s.fname , s.sname , d.dname from tblstud s inner join tbldept d on d.dno = s.dno order by 
s.fname , d.dname DESC;



select * from tbldept d join tblstud s on d.dno = s.dno where  s.bdate< '2005-05-05';


select * from tbldept d join tblstud s on d.dno = s.dno where date_format(bdate , '%b') = 'feb';

select * from tblstud;
select * from tbldept d join tblstud s on d.dno = s.dno where date_format(bdate , '%Y') in('2001','2005');



-- select * from tbldept d join tblstud s on d.dno = s.dno where date_format(bdate , '%u') = '02';


SELECT * from tblstud WHERE DATE_FORMAT(bdate, '%u') = '01';

SELECT * 
FROM tbldept d 
JOIN tblstud s ON d.dno = s.dno 
WHERE WEEKOFYEAR(s.bdate) = 2;

select * from tblstud;

