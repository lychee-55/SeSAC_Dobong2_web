-- Active: 1732688863205@@127.0.0.1@3306@sesac
SHOW TABLES;

CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

DESC customer;

INSERT INTO customer(id,name,birthday)
VALUES('aaa','손흥민','1992-03-17');
INSERT INTO customer(id,name,birthday)
VALUES('bbb','황희찬','1997-11-01');
INSERT INTO customer(id,name,birthday)
VALUES('ccc','이강인','2001-05-31');
INSERT INTO customer(id,name,birthday)
VALUES('ddd','조현우','1992-03-17');

SELECT * FROM customer;
------------ 외래키 테이블 --------------
-- 기본 키를 참조 하는게 외래키
--(제약조건)
-- ON UPDATE CASCADE : 기준 테이블의 데이터가 변경되면 참조테이블의 데이터도 변경
--- 즉, 회원 테이블의 아이디가 변경되면 구매테이블의 customer_id가 같이 변경됨.

-- ON DELETE CASCADE :기준 테이블의 데이터가 삭제되면 참조테이블의 데이터도 삭제.
--- 회원 테이블의 데이터가 삭제되면 구매테이블의 데이터도 함께 삭제됨

CREATE TABLE orderlist(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);

/* 테이블 삭제시, */
-- 구매테이블(orderlist) (=외래키가 있는 테이블) (1)먼저 삭제
-- 회원 테이블(customer) (=참조되는 기본키가 있는 테이블) (2)나중 삭제

DESC orderlist;

INSERT INTO orderlist (customer_id, product_name, quantity)
VALUES ('aaa','맥북',1);
INSERT INTO orderlist (customer_id, product_name, quantity)
VALUES ('bbb','빅파이',31);
INSERT INTO orderlist (customer_id, product_name, quantity)
VALUES ('ccc','키보드',3);
INSERT INTO orderlist (customer_id, product_name, quantity)
VALUES ('bbb','초코파이',5);
INSERT INTO orderlist (customer_id, product_name, quantity)
VALUES ('ccc','귀여운 컴블러',2);

-- customer 테이블에 없는 회원은 구매할 수 없음.

SELECT * FROM orderlist;

################### JOIN #######################
-- JOIN: 두테이블을  묶어서 하나의 테이블로 만듦

-- INNER JOIN 
-- 1. INNER JOIN 과 ON 사용

SELECT * FROM customer 
INNER JOIN orderlist ON customer.id = orderlist.customer_id;

-- 2. WHERE 로 INNER JOIN 사용
SELECT * FROM customer,orderlist
WHERE customer.id = orderlist.customer_id ;

-- 3. INNER JOIN 과 ON 사용, WHERE 조회조건 추가
SELECT * FROM customer 
INNER JOIN orderlist ON customer.id = orderlist.customer_id 
WHERE quantity >=5 ;

-- 4. WHERE로 INNER JOIN , 조회조건 추가
SELECT * FROM customer 
INNER JOIN orderlist WHERE customer.id = orderlist.customer_id 
AND quantity >=5 ; -- WHERE 조인조건 AND 조회조건;

-- 5. 특정 컬럼 조회
SELECT orderlist.id, customer.id, customer.name,
orderlist.product_name, orderlist.quantity
FROM orderlist, customer
WHERE customer.id = orderlist.customer_id;

-- 6. 테이블에 별칭을 지어서 접근(as)
SELECT c.id, o.customer_id, c.name, o.product_name, o.quantity
FROM customer as c, orderlist as o 
WHERE c.id = o.customer_id;

-- ***** [left outer join, right outer join]----
SELECT *
FROM orderlist LEFT OUTER JOIN customer
ON orderlist.customer_id = customer_id;
SELECT *
FROM orderlist RIGHT OUTER JOIN customer
ON orderlist.customer_id = customer_id;

-- NATURAL JOIN
-- 같은 컬럼이 없어서 안됩니다.
SELECT *
FROM orderlist NATURAL JOIN customer;


/* -------- DCL -----------*/
DESC mysql.user;
SELECT * FROM mysql.user;

CREATE USER 'user2'@'localhost' IDENTIFIED BY '1234';
-- 새 유저 만들기

SHOW GRANTS; -- 권한 확인
SHOW GRANTS FOR 'user2'@'localhost'; -- 권한 확인// 권한이 없음..
DROP USER 'user2'@'localhost';

-- mysql root 비밀번호 변경
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''; 
-- mysql_native_password mysql의 정책
