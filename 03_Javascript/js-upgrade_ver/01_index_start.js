/* 1-1. 배열의 구조분해 문법*/
const arr1 = ['tomato','kiwi','orange']
console.log(arr1[0])   // tomato
const tomato = arr1[0]
console.log(tomato)    // tomato
const [a,b,c] = arr1
console.log(a)         // tomato

const arr2 = ['red', 'orange', 'pink', 'yellow']
const [red,orange, ,yellow] = arr2   // 저장하고싶지 않은 내용이 있을시 공백으로 남기기
console.log(red, orange, yellow)

// const [a1,b1] = arr2   // 맨 끝에 있는 요소들은 생략 가능

const [v1,v2,v3,v4,v5] = arr2
console.log (v1,v2,v3,v4,v5)    // v5는 존재하기 않기에 undefined

// 변수 교환
let value1='second'
let value2='first'

let temp; // 값을 저장하기 위한 임시 변수

temp = value1  // temp = second,  임시 변수를 만들어줘야 변수1을 2로 고칠때 변수 2가 사라지지 않음.
value1 = value2 // value = first, value2 = first
value2 = temp  // value = first, value2 = second

console.log(value1, value2)  // first,second

value1 = "second";
value2 = "first";
console.log(value1,value2);

[value2,value1] = [value1,value2];
console.log(value1, value2);

/* 1-2. 객체의 구조분할 할당 문법 */
const obj ={
    title:'제목',
    content:'내용',
    num: 10
}

// 값에 접근할 때는 점, 대괄호 접근법 이용
console.log(obj.title)
console.log(obj['title'])

// console.log(title)
const {num,title,content} = obj
console.log(title)

const {n1,t1,c1} = obj    // object-key에 접근은 무조건 key이름으로
console.log(n1)

const {content:c2, title:t2} = obj  // key이름 말고 다른이름 사용원할시, ":"를 사용해 교체 해야함.
console.log(t2,c2)

/* 2. spread와 rest ... */
/* 2-1. array */
const arr3 = [1,2,3,4,5]
const arr4 = ['a','b','c']
console.log(arr3)      // [1,2,3,4,5]

for(let el of arr3){
    console.log(el)  // 1,2,3,4,5
}

console.log(...arr3) // 1 2 3 4 5 정확한 배열은 아님
console.log(...arr4)

// arr3, arr4 합치기 >> 1차원 배열로
const arr5 = arr3.concat(arr4)
console.log(arr5)    // [1,2,3,4,5,'a','b','c']

const arr6= [arr3, arr4]  // 2차원 배열 형식, 
console.log(arr6)

/* 2-2. string */
const str = 'alliehigh'
let strToArr = [...str]
let strToArr2= str.split('')
// string to array >> split()
// array to string >> join()
console.log(strToArr)
console.log(strToArr2)

/* 2-3. object */
// ...spread
let obj1={
    name:'lychee',
    height:165,
    friend:null,
    married:false
}

let obj2={
    name:'지원',
    like:['sleeping','game'],
    greeting:function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요..
            키는 ${this.height}입니다..`)
    }
}
obj2.greeting()

let me = {...obj2,...obj1}  // 두 배열에 name이 겹칠때 맨 아래가 먼저인 우선순위 때문에 obj1의 이름이 나옴.
me.greeting()
console.log(me)

me={
    ...obj1,
    ...obj2,
    gender:'female'
}
console.log(me)

// ...rest
console.log('-------rest------')
function test(a,b){
    console.log(a)
    console.log(b)
}
test(1,2)
test('안녕')

function test2(...val){  //...만 잘 쓰면 rest가 아닌 다른것 사용 가능
    console.log(val)  // rest로 받아준 결과는 배열array
    const [a,b,c, ...rest] = val 
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('rest',rest)
}

test2(2,3,4,5,6,7,8)

// quiz~
//  매개변수가 몇개가 들어오든 합해서 반환하는 함수를 작성

function addNumber(...rest){
    console.log(rest);
    let sum = 0;
    rest.forEach(function(number){
        sum+=number
    })
    return sum;
}

let sumResult = addNumber(1,2,3,4,5)
console.log(sumResult) // 15