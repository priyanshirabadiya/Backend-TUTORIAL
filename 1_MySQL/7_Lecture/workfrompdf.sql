
-- 1)

select * from SALES_ORDER_DETAILS sod
inner join sales_order so on sod.ORDERNO = SALES_ORDER_DETAILS.ORDERNO
inner join  CLIENT_MASTER cm on so.CLIENTNO = cm.clientno where cm.Name = "Ivan Bayoss" ;


-- 2)

select  pm.DESCRIPTION , pm.QTYONHAND from  PRODUCT_MASTER pm 

select pm.DESCRIPTION , pm.QTYONHAND from SALES_ORDER_DETAILS sod
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO
inner join PRODUCT_MASTER pm on sod.PRODUCTNO = pm.PRODUCTNO 
where so.ORDERDATE = '2004-02-18';


SELECT pm.DESCRIPTION, pm.QTYONHAND
FROM SALES_ORDER_DETAILS sod
INNER JOIN SALES_ORDER so ON so.ORDERNO = sod.ORDERNO
INNER JOIN PRODUCT_MASTER pm ON sod.PRODUCTNO = pm.PRODUCTNO
WHERE MONTH(so.ORDERDATE) = MONTH('2004-04-18');



-- 3)


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


-- 4)

select cm.Name ,cm.clientno from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on sod.PRODUCTNO = pm.PRODUCTNO 
inner join SALES_ORDER so on sod.ORDERNO = so.ORDERNO
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
where  pm.DESCRIPTION = 'Trousers'
;

-- or------------------------------

select cm.clientno  , cm.Name from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on sod.PRODUCTNO = pm.PRODUCTNO 
inner join SALES_ORDER so on sod.ORDERNO = so.ORDERNO
inner join CLIENT_MASTER cm on pm.DESCRIPTION = 'Trousers';


-- 5)


select pm.DESCRIPTION , so.ORDERNO , so.CLIENTNO , so.ORDERDATE , so.SALESMANNO , so.DELYTYPE , so.BILLYN , sod.QTYORDERED
from SALES_ORDER_DETAILS sod 
inner join sales_order so on sod.ORDERNO = so.ORDERNO 
inner join PRODUCT_MASTER pm on  pm.PRODUCTNO = sod.PRODUCTNO
inner join CLIENT_MASTER cm on cm.clientno = so.clientno
where  pm.DESCRIPTION = 'Pull Overs' and sod.QTYORDERED < 5;


-- 6)


select  cm.Name, pm.DESCRIPTION , pm.PRODUCTNO from SALES_ORDER_DETAILS sod
inner join PRODUCT_MASTER pm on pm.PRODUCTNO = sod.PRODUCTNO
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO
inner join CLIENT_MASTER cm on cm.Name in ('Ivan Bayoss','Mamta Muzumdar');


-- 7)

select pm.DESCRIPTION , cm.QTYONHAND from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on pm.PRODUCTNO = sod.PRODUCTNO
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO 
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
where clientno in ('C0001' , 'C0002');



-- 8)

select cm.clientno , pm.DESCRIPTION , pm.QTYONHAND from SALES_ORDER_DETAILS sod 
inner join PRODUCT_MASTER pm on pm.PRODUCTNO = sod.PRODUCTNO
inner join SALES_ORDER so on so.ORDERNO = sod.ORDERNO 
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
where cm.clientno in ('C0001' , 'C0002');



--------------------------------------------------------subqueries excercise


-- a)

select PRODUCTNO , DESCRIPTION from PRODUCT_MASTER pm where not exists (
    select PRODUCTNO from SALES_ORDER_DETAILS sod where sod.PRODUCTNO = pm.PRODUCTNO
);

-- b)

select cm.clientno , cm.name , cm.city , cm.Cstate from sales_order so 
inner join CLIENT_MASTER cm on cm.clientno = so.clientno
where so.ORDERNO = '019001';


SELECT Name, City
FROM CLIENT_MASTER
WHERE CLIENTNO = (
    SELECT CLIENTNO
    FROM SALES_ORDER
    WHERE ORDERNO = '019001'
);



select name from CLIENT_MASTER  
where clientno in (
    select clientno from SALES_ORDER where  MONTH(ORDERDATE) < 5
);



select * from PRODUCT_MASTER where DESCRIPTION = 'Lycra Tops';





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



-- 

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






