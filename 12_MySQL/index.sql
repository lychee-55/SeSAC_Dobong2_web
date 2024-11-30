show databases;
CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;


CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
/*
utf8 : 한글 및 영어..
utf8mb4: utf8 보다 더 많은 문자열 저장 가능
- 이모지, 특수문자, 다국어..
*/

-- 데이터 베이스 사용 선언
USE sesac;

-- 테이블 목록 확인
SHOW TABLES;

-- 데이터 베이스 삭제
DROP DATABASE mydatabase;

##### 테이블 관련 명령어
/*
CREATE TABLE 테이블 이름(
    속성이름1 데이터 타입 제약조건,
    속성이름2 데이터 타입 제약조건,
)
*/

-- 제약조건
-- NOT NULL : null 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정(중복 허용 X,NULL 허용 X)
-- DEFAULT: 기본 값 설정
-- UNIQUE : 중복 허용 X, NULL 허용 X, 한 테이블에 여러개 설정 가능

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

--테이블 구조 확인
DESC products;

DROP TABLE products;

-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);

ALTER TABLE products MODIFY new_column INT;  -- 후에 테이블 구조 확인 클릭

ALTER TABLE products DROP new_column;

############[여기부터 DML]################
-- 데이터 조작어
-- 데이터 CRUD를 위해 사용하는 SQL문 입니다.

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
SHOW TABLES;

DESC user;

-- 드래그하고 ctrl+enter하면 한번에 insert 실행됨.
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 22, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

-- Read >> SELECT[COLUMN이름] FORM[테이블 이름] (WHERE 조건)

SELECT * FROM user; --전체 컬럼 전체 조회

SELECT name FROM user;  -- 특정 컬럼만 전체조회

SELECT age, name FROM user; -- 특정 컬럼 2개만 전체조회

-- where 절을 이용해서 조건 걸기
SELECT * FROM user WHERE age >=25;  -- 25세 이상
SELECT * FROM user WHERE id=3;  -- 일치 비교

SELECT id, age FROM user WHERE name='권순모';

-- LIKE 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; -- 서울로 시작하는 주소 값 찾기
SELECT * FROM user WHERE name LIKE '__희';  -- 마지막 글자가 '희'
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 '희'가 들어가는 사람

SELECT * FROM user WHERE address LIKE '%광역시%'; -- 광역시 주소인 사람들
-- 혹은 SELECT * FROM user WHERE address LIKE '__광역시%'; -- 광역시 주소인 사람들


-- IN(list) >> list 안에는 범위값이 들어감.
SELECT * FROM user WHERE age IN(20,21,22,23); -- 나이가 20,21,22,23세 중 하나

-- BETWEEN a AND b (a와 b를 포함한 숫자 범위)
SELECT * FROM user WHERE age BETWEEN 25 AND 30; -- 25살 이상 30살 이하

--IS NULL, IS NOT NULL (을 위해 아래 새 컬럼 추가)
INSERT INTO user(name, age) VALUES('서현승',28);
-- 주소가 null 인 사람 조회
SELECT * FROM user WHERE address IS NULL;
-- 주소가 null이 아닌 사람 조회
SELECT * FROM user WHERE address IS NOT NULL;

/* 논리 연산자(복합조건) */
-- 주소가 null 이 아니면서, age가 25 초과인 전체 속성(AND)
SELECT * FROM user WHERE address IS NOT NULL AND age >25;

-- 최씨이고 나이가 22인 사람(AND)
SELECT * FROM user WHERE name LIKE "최%" AND age = 22;

-- 서울에 살거나 김씨인 사람(OR)
SELECT * FROM user WHERE address LIKE "서울%" OR name LIKE "김%";

-- order by, distinct, limit
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순 정렬

-- id 가 6보다 큰 것을 조회하고 난 후, age 기준으로 오름차순 정렬
SELECT * FROM user WHERE id >6 ORDER BY age ASC; 

-- distinct
SELECT age FROM user ORDER BY age ASC;
SELECT DISTINCT age FROM user ORDER BY age ASC;

-- 서울시에 사는 사람 이름 주소 조회 /2개 만
SELECT name, address 
FROM user 
WHERE address LIKE '서울%'
ORDER BY name ASC 
LIMIT 3 ;

/* 14-2. SQL 실습문제 1 */
CREATE DATABASE practice CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
SHOW DATABASES;
USE practice;
SHOW TABLES;

CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY, 
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2)
);

DESC member;

/* 14-2. SQL 실습문제 2 */
-- ALTER : ADD, DROP COLUMN, MODIFY
-- ALTER TABLE 테이블명 () 속성이름 데이터 타입
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP COLUMN age;
ALTER TABLE member ADD interest VARCHAR(100); 

/* 14-2. SQL 실습문제 3 */
CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
) ;
SHOW TABLES;
DESC user;
TRUNCATE TABLE user;

/* 14-2. SQL 실습문제 4 */
-- INSERT INTO [테이블명] (필드명1=속성이름, 필드명2,...) VALUES(값1,값2,...)
-- 테이블의 모든 column에 순서대로 추가하고 있기에 (필드명 명시 안함)
INSERT INTO user VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27',47);
INSERT INTO user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03',22);
INSERT INTO user VALUES('jungkrat', '4ifha7', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

/* 14-2. SQL 실습문제 5 */
SELECT * FROM user ORDER BY birthday ASC;
## 모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.

SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
## 회원 목록 중 gender 컬럼이 값이 "M"인 회원목록을 가져오는데 이떄 name 컬럼의 값을 기준으로 내림차순 정력하여 가져오시오.

SELECT id,name FROM user WHERE birthday LIKE "199%";
## 1990년도에 태어난 회원의 id,name 컬럼을 가져와 목록으로 보여주시오.

SELECT * FROM user WHERE birthday LIKE "%-06-%" ORDER BY birthday ASC;
## 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.

SELECT * FROM user WHERE gender ="M" AND birthday LIKE "1970%";
## gender 컬럼의 값이 "M"이고 1970년대에 태어난 회원의 목록을 가져오시오.

SELECT * FROM user ORDER BY age DESC LIMIT 3;
## 모든 회원 목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오

SELECT * FROM user WHERE age BETWEEN 25 AND 50;
## 모든 회원 목록 중 나이가 25이상 50 이하인 회원의 목록을 출력하시오

--UPDATE 테이블명 SET 필드명="값" WHERE 필드="값";
UPDATE user SET pw="12345678" WHERE id="hong1234";
## id 컬럼 값이 hong1234인 레코드의 pw 컬럼값을 12345678로 변경하세요.
-- UPDATE user SET pw="8o4bkg" WHERE id="hong1234";

--DELETE FROM 테이블명 WHERE 필드="값";
DELETE FROM user WHERE id="jungkrat";
## id컬럼의 값이 jungkrat인 레코드를 삭제하시오.

########################[11-29]###################3
SELECT * FROM user;
-- update 문 
--UPDATE 테이블 이름
-- SET 컬럼명= "바꿀 데이터"
-- WHERE ID =1
UPDATE user SET address= "서울특별시 도봉구" WHERE id=1;

UPDATE user SET address = "제주특별자치도 제주시", name = "이지현" WHERE id =2;
-- 여러개를 바꾸고 싶을 땐 ,를 기준으로 바꿈.

## delete문
/*
DELETE FROM 테이블 이름
WHERE 조건
*/
DELETE FROM user WHERE id >8;

CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL DEFAULT "홍길동",
    hobby VARCHAR(20)
);

DESC student;

INSERT INTO student (hobby) VALUES ('등산');
INSERT INTO student (hobby,name) VALUES ('등산','박상우');
SELECT * FROM student;

-----HAVING 과 GROUP BY -------
DROP TABLE IF EXISTS user; -- user 테이블이 존재할 경우 삭제

SHOW TABLES;

CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    speacialize ENUM('축구', '야구', '클라이밍','배드민턴') NOT NULL,
    gender ENUM('남', '여') NOT NULL,
    career_year INT NOT NULL
);--ENUM은 스타일을 강력하게 제어

DESC user;

INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);

SELECT * FROM user;

---------- 집계함수 사용해보기---------
-- COUNT, SUM, AVG, MIN, MAX
SELECT COUNT(speacialize) FROM user WHERE speacialize="축구"; --speacialize가 축구인 튜플의 개수

SELECT SUM(career_year) FROM user; -- 전체 선수의 경력 합
SELECT SUM(career_year) FROM user WHERE speacialize="축구"; -- speacialize가 축구인 선수의 경력 합
SELECT AVG(career_year) FROM user WHERE speacialize="축구"; -- speacialize가 축구인 선수의 경력 평균
SELECT MIN(career_year) FROM user WHERE speacialize="축구"; -- 축구선수 중 경력이 가장 적은 사람
SELECT MAX(career_year) FROM user WHERE speacialize="축구"; -- 축구선수 중 경력이 가장 많은 사람

--------- GROUP BY ---------------
-- 같은 그룹끼리 묶어서 조회
SELECT speacialize FROM user GROUP BY speacialize;
SELECT speacialize, COUNT(speacialize) FROM user GROUP BY speacialize;

-----------having-----------------
-- group화 된 테이블에 조건을 다는 것
SELECT speacialize, COUNT(speacialize) 
FROM user WHERE gender="여" 
GROUP BY speacialize HAVING COUNT(speacialize) >= 2;  