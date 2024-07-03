-- functions in sql open following link then read and solve  

https://www.cs.utexas.edu/~mitra/csFall2009/cs329/lectures/sqlFunc.html

-- I. Numberic Functions

-- 1) ABS() function used to convert number negative to possitive

SELECT Abs(-243.5) AS AbsNum;

-- 2) MOD ( m, n ) returns a reminder

SELECT MOD(4,2); -- ANS : 0

-- 3) POWER 

SELECT POWER(4, 2); -- ANS: 16

SELECT POW(4, 2);  -- 16

-- 4) ROUND 

SELECT ROUND(125.789,2);

-- 5) TRUNC 

SELECT TRUNCATE(135.375, 0);

-- 6) SIN

SELECT SIN(2); -- 0.90

-- 7) COS

SELECT COS(2); -- -0.40

-- 8) TAN  

SELECT TAN(1.75);  -- -5.52037992250933

-- 9) ACOS

SELECT ACOS(0.25);  -- 1.318116071652818

-- 10) ASIN

SELECT ASIN(0.25);  -- 0.25268025514207865

-- 11) ATAN

SELECT ATAN(2.5);   --1.1902899496825317

-- 12) ATAN2

SELECT ATAN2(0.50, 1); --0.4636476090008061

-- 13) CEIL

SELECT CEIL(25.75);  -- 26

-- 14) CEILING

SELECT CEILING(25.75); -- 26

-- 15) DEGREES

SELECT DEGREES(1.5);  -- 85.94366926962348

-- 16) DIVISION 

SELECT 10 DIV 5;  -- 2

-- 17) EXP

SELECT EXP(1);  -- 2.718281828459045

-- 18) FLOOR

SELECT FLOOR(25.75); -- 25

-- 19) GREATEST

SELECT GREATEST(3, 12, 34, 8, 25); -- 34

-- 20) LEAST

SELECT LEAST(3, 12, 34, 8, 25); -- 3

-- 21) LN

SELECT LN(2);  -- 0.6931471805599453

-- 22) LOG

SELECT LOG(2);  -- 0.6931471805599453

SELECT LOG(2, 4); -- 2

SELECT LOG10(2);  -- 0.3010299956639812

SELECT LOG2(6); -- 2.584962500721156

select pi(); -- 3.141593

SELECT RADIANS(180);  -- 3.141592653589793

-- 23) RAND
-- generate ramdom
SELECT RAND()*(10-5)+5;

-- 24) ROUND

SELECT ROUND(135.375, 2); -- 135.38

-- 25) SIGN

SELECT SIGN(255.5); -- 1
SELECT SIGN(-12);  --  -1
SELECT SIGN(0);  --  0

-- 26) SQRL

SELECT SQRT(64); -- 8

-- 27) SUM

select sum(amount) as total from payments;

-- 28) MIN

select min(amount) as largestamt from payments;

-- 29) MAX

select max(amount) as largestamt from payments;

-- 30) TAN

SELECT TAN(1.75);  -- -5.52037992250933


-----------------------------------------------------------------------------------------------------------

-- II. String functions 

-- 1) LOWER

select lower(customername) from customers;

select contactlastname , contactfirstname , concat(contactlastname , "   " , contactfirstname) from customers;

-- 2) LPAD
SELECT LPAD("SQL Tutorial", 15, "AB") as LPAD ;

-- 3) RPAD
SELECT RPAD("SQL Tutorial", 5, "AB") as LPAD ;

-- 4) TRIM
SELECT trim("    DFSDFSDF   ") AS TIMMED;
SELECT ltrim("    DFSDFSDF   ") AS TIMMED;
SELECT rtrim("    DFSDFSDF   ") AS TIMMED;


-- REPLACE STRING

SELECT REPLACE('SQL Tutorial', 'Q', 'M');

-- SUBSTR 

SELECT SUBSTR("SQL Tutorial", 5, 3) AS ExtractString;

-- LENGTH

SELECT LENGTH("SQL Tutorial") AS LengthOfString;

-- INSTR 
-- GIVE INDEX NUM OF NO'c'

SELECT INSTR("W3Schools.com", "c") AS MatchPosition;

-----------------------------------------------------------------------------------------------------------

-- III. GROUP FUNCTIONS 

SELECT AVG(AMOUNT) FROM PAYMENTS;

SELECT COUNT(AMOUNT) FROM PAYMENTS;

--  MIN , MAX , SUM are also group functions

-----------------------------------------------------------------------------------------------------------

-- IV. DATE AND TIME FUNCTIONS

-- Add 7 days to date so output is 2019-05-05
SELECT ADDDATE('2019-04-28', INTERVAL 7 DAY) as dateadd;

-- Add 3 months to the date '2019-04-28'
SELECT ADDDATE('2019-04-28', INTERVAL 3 MONTH) as addmonths;

-- Add 2 years to the date '2019-04-28'
SELECT ADDDATE('2019-04-28', INTERVAL 2 YEAR);

-- It gives last day of month

SELECT LAST_DAY("2017-11-15");  -- 2017-11-30

-- gives differences between months
SELECT TIMESTAMPDIFF(MONTH, '2021-5-28', '2021-10-01') AS months_diff;

-- gives current time as UTC timing
SELECT SYSDATE();

-- ans is 34
SELECT GREATEST(3, 12, 34, 8, 25);

-- give smallest value
SELECT LEAST(10, 20, 30, 40) AS Least_Value;


