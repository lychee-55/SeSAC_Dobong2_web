/*
자료형의 종류
- string(문자열), number(숫자), boolean, null, undefined
- object(객체), array(배열)
*/ 

// 1. string
let myName = "allie"
let email = '[allie@naver.com]'
console.log(myName)
console.log(email)

// 문자와 변수를 동시에 써보기
console.log('내 이름은' , myName)
// let aaaa = '내 이름은', myName
let aaaa = '내 이름은'+myName+'이고, 이메일은'+email+'입니다.'
let bbbb = `내 이름은 ${myName}이고, 이메일은 ${email}입니다.`
console.log(aaaa)
console.log(bbbb)

// 2. number
let number=123
let opacity=0.7
console.log(number)
console.log(opacity)

console.log(number + opacity)
console.log(number - opacity)

console.log("apple"-3)  //NaN(Not a Number)

// 3. boolean
// true, false 둘 중의 하나의 값
let checked = true
let isShow = false

console.log(checked)
console.log(isShow)

// 4. undefined
// 값이 없는 상태
// 실수에 가까운 값
let undef;
let obj={
    abc:123
}
console.log(undef)
console.log(obj.abc)
console.log(obj.efg)

// 5. null, 빈 값!
// 일부러 설정해놓은 빈 값
let empty = null;
console.log(empty)

// 6. array, 배열
// 순서는 0부터 시작

let fruits = ["orange", "apple", "banana", "mango"]
let fruits2 = new Array("orange", "apple", "banana", "mango")

console.log(fruits[3])
console.log(fruits2[1])

//여러 데이터 타입을 하나의 배열에 넣을 수 있음
let data = [1, true, null, "string", 100]
console.log(data[0],data[4])

// 2차원 배열
let korean=[["가", "갸", "거", "겨"],
            ["나", "냐", "너", '녀'],
            ["다", "댜", "더", "뎌"]]

console.log(korean[2][0])

//아래 배열에서 아이스크림 출력하기
const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],];

console.log(letters[3][0],letters[1][3],letters[0][1],letters[0][3],letters[2][2])

//8 뽑기
const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];

console.log(nums[1][0][1])

// 7. object 타입
// 키:값 의 쌍으로 이루어져있음.
let cat = {
    name:'나비',
    age: 1,
    gender: 'F',
    isCute: true
}

console.log(cat.name)
console.log(cat.isCute)
cat.like = ['tuna', '쥐']

// 접근방법2 - 대괄호 접근법!
// 접근시 키이름은 반드시 문자열로
console.log(cat["name"])
cat["parent"]="초롱이"
console.log(cat)

// 자료형 확인! type of
console.log('---------')
let und;
console.log(typeof "문자")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof {}) // object
console.log(typeof [true]) // object
console.log(typeof null) // object
console.log(typeof und) // object
console.log(typeof NaN) // number
console.log(typeof function(){}) // function

// type of 실습 문제
// number isn't string data type 
let aaa = "isn't"
let bbb = "data type."
console.log(typeof 3 + aaa + typeof "안뇽" + bbb)

console.log(`${typeof 123} isn't ${typeof ""} data type`)
console.log(typeof 123+ 'isn\'t' + typeof "문자" + 'data type.')

// "number" isn't "string" data type.
// typeof 를 array나 null에 사용하면, "object" 결과를 얻을 수 있습니다.
console.log(`${typeof 123} isn't ${typeof ""} data type.`)
console.log(typeof 123+ ' isn\'t' + typeof "" +" data type.")
console.log('typeof 를 array나 null에 사용하면, "' + typeof null +'"결과를 얻을 수 있습니다.')

// -----------------------------------------------
// 형 변환
console.log('--------------------------')
// 1. ?? >> string
let str1 = true
let str2 = 123
let str3 = null
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))
console.log(typeof str1.toString())

// 2. ?? >> number
let n1 = true
let n1_1 = false
let n2 = "123"
let n3 = "123.5"
console.log(Number(n1)) //true > 1
console.log(Number(n1_1)) //false > 0
console.log(Number(n2)) 
console.log(Number(n3))
console.log(parseInt(n2)) //정수로 바꿔줌, 소수점을 버림
console.log(parseInt(n3)) //123.5 > 123 (소수점 버려짐)
console.log(parseInt(3.14)) //parseInt 에 숫자가 들어가도 되고 문자열이 들어가도 됨.

// let english = prompt("영어 점수를 입력해주세요")  // prompt는 문자열로 들어옴!!!
// let math = prompt("수학 점수를 입력해주세요")

// // prompt를 숫자열로 바꾸는 두가지 방법!
// let english = (Number(prompt("영어 점수를 입력해주세요")))  // prompt는 문자열로 들어옴!!!
// let math = (Number(prompt("수학 점수를 입력해주세요")))
// // 혹은
// // english = Number(english)
// // math = Number(math)

// let average=(english+math)/2
// console.log(average)

// ---------------------------------------
// 변수
// 1. var - 재할당, 재선언 모두 가능
var name = "홍길동"
name="gildong" //원래 선언된 것에 덮어씌우는 것이 재할당

var name = "성춘향" //재선언이 가능하기에 var는 사용하지말것
// 재선언 가능한 것이 장점같을 수는 있으나
//협업과 유지보수에 힘들다.

// 2. let - 재할당 가능, 재선언 불가
let c;// 선언과 초기화를 동시에 하지 않아도 됨. 선언만 해놓아도 됨.
console.log('---------------')
console.log(c)
c = 5  //재할당 가능
c = 10
c = 15
console.log(c)
// let c=123, 재선언 불가능

// 3. const - 재할당, 재선언 불가
// const b //선언과 동시에 반드시 초기화 되어야함 (초기화는 값을 넣어주는 것을 뜻함)
const b = 3
// const b = 5 // 재선언 불가능
// b = 5  // 재할당 불가능

// 값을 넣고 안 바꿀때를 const,바꿀때는 let

let q1 =3
q1 - 2
console.log(q1) //3

let q2 =10
q2 = q2 + 10  //q2 += 10
q2 = q2 - 5  // q2 -= 5
console.log(q2)

console.log('===연산자===')
/**
 * 연산자
 * 대입연산자 = 
 * 비교연산자 == === != !== > >= < <=
 * 산술연산자 + - * / % **
 * 논리연산자 !(not) &&(and) ||(or)
 */

// 비교연산자
// 비교연산자의 결과값은 true 나 false로 나옴.
// == === != !== > >= < <=
console.log(1==1)
console.log(1==2)
console.log(1!=1)
console.log(1!=2)
console.log(1=='1') //값이 같을때
console.log(1!='1') 
console.log(1=='2') // 값도 다를때

console.log('(=== 비교)')
console.log(1===1)
console.log(1===2)
console.log(1!==1)
console.log(1!==2)
console.log(1==='1') 
console.log(1!=='1') 
console.log(1==='2')

console.log('크기 비교')
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <= 1)

console.log('산술연산자')
console.log(1+2)
console.log(1-2)
console.log(1*2)
console.log(1/2)
// 나머지 연산자
console.log(8%5)
console.log(2**5)

//논리 연산자 (! && ||)
console.log(true)
console.log(false)
console.log(!true) // !은 not
console.log(!false)
console.log(!!false)
console.log(true && true) // true
console.log(true && false) // false , &&는 false가 앞에 있는게 좋다.
console.log(false && true) // false
console.log(false && false) // false
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true, ||는 true가 앞에 있는게 좋다.
console.log(false || false) // true, ||는 true가 앞에 있는게 좋다.

console.log(!(2 > 1)) // false
console.log(2 > 1 && -2 < 1) // true
console.log((2 > 1 && 0 > -2) || 5 < 2) // true

console.log('-------------------------')
// == 연산자 이용
console.log("0"==false)
console.log("0"==0)
console.log(""==0)  // 결과값이 이상해짐
console.log(undefined==null)
console.log(0==false)

console.log(""=="0") //false
console.log(false==undefined)
console.log(false==null)

console.log("===") 
console.log("0"===false)
console.log("0"===0)
console.log(""===0)  
console.log(undefined===null)
console.log(0===false)