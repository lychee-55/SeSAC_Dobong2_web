/**
 * 함수
 *  - 특정 작업을 수행하기 위해 설계된 코드집합
 *  - 함수의 선언 구조
 *  - 키워드 : fuction
 *  - 함수의 이름 : camelCase로 함수의 이름 작성
 *  - (매개변수): 함수 내부에서 사용할 변수.
 *  - {스코프} : 함수의 내부 코드
 * 함수 선언문, 함수 표현식
 *  - 함수 표현식 : 변수에 함수를 저장
 *  - 함수 선언문 : 명시적 함수 선언 
 */
helloWorld1()
console.log('선언되기 전')
function helloWorld1(){
    console.log('hello World 1')
}

helloWorld1() //호출하는 중

function helloWorld2(){
    // return 키워드 : 
    // 함수 내부코드의 최종 결과값을 보관하기 위한 키워드
    return 'hello world 2'
    console.log('리턴아래입니다..') //함수 내부는 return을 만나는 순간 끝. 아래가 나타나지 않음.
}
console.log(helloWorld2())

// helloWorld3(), err! 선언되기 전에 호출 불가능!!
const helloWorld3 = function(){
    console.log('hello world 3')
}

helloWorld3()

// helloWorld4() err! 선언되기 전에 호출 불가능!!
const helloWorld4 = () => {
    console.log('hello world 4')
}

helloWorld4()

// 매개변수가 있는 함수 만들기   // 매개변수는 반복 사용 가능
// 1. 매개변수 1개, 함수 선언문
function sayHello1(text){
    return text
}

console.log(sayHello1("안녕!"))

// 2. 매개변수 2개, 함수 선언문
function sayHello2(text,name){
    return `${text}! ${name}`
}

console.log(sayHello2('안녕','lee'))

// 3. 매개변수 2개, 함수 표현식
// 내부 스코프 console.log로 작성
const sayHello3= function(text,name){
    console.log(`${text}! ${name}`)
}
sayHello3("안녕","lee")

// 4. 매개변수 2개, 화살표 함수
const sayHello4= (text,name) => {
    return `${text}! ${name}`
}

const sayHelloValue = sayHello4("안녕","lee")
console.log(sayHelloValue)


// 실습
function multifly(a,b){
    return a*b
}

console.log(multifly(3,7));
console.log(multifly(2,2));

//실습2
const square = (num)=>{
    console.log(num**2)
}
console.log(square(4))