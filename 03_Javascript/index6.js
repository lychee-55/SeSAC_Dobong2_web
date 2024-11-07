// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceAll, repeat, split

let str1 = "Strawberry Moon"
let str2 = "   Strawberry Moon   "

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0] + str1[11])

// Sonny단어 만들어 보기
console.log(str1[0] + str1[12]+ str1[13]+ str1[14]+ str1[9])

// length 속성 확인
console.log(str1.length)
console.log(str2.length)

/* 메서드 사용해보기 */
// trim, toLowerCase, toUpperCase
// 문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim()) // 공백없앤 것 보기
console.log(str2.trim().length) // 공백 없앤 뒤 length 확인

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, charAt, Slice
let fruit = "applemango"
// indexOf : 내가 찾고 싶은 문자열의 인덱스번호 반환
console.log(fruit.indexOf("e"))  //4
console.log(fruit.indexOf("a"))  //0 
console.log(fruit.indexOf("apple"))  //0  //맨 앞 문자열의 인덱스 번호만 반환
console.log(fruit.indexOf("mango"))  //5
//없는 문자열 찾으려고 하면 -1 반환됨
console.log(fruit.indexOf("z"))  

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10))  //없는 문자열 찾으려고 하면 아무것도 안나옴(빈 문자열 반환)

console.log(fruit.slice(5))  //,mango
console.log(fruit.slice(3,6))  // lem 앞 숫자부터 뒷 숫자전까지 반환
console.log(fruit.slice(-1))  // o  // 마이너스는 끝에서 세기
console.log(fruit.slice(-4))  // ango

// replace, replaceAll
let msg1 = "Wow~ It is so amazing!!! Wow"
console.log(msg1.replace("Wow", "Hey~~~")) // 반환값만 변경되서 출력
console.log(msg1.replaceAll("o", "OO"))
console.log(msg1)

let date = "2023.11.06"
// YYYY-MM-DD
console.log(date.replaceAll(".","-"))

date = date.replaceAll(".","-")
console.log(date)

let hello = "hello"
console.log(typeof hello)

let hello2= hello.split()
console.log(hello2)

hello2 = hello.split("")
console.log(hello2)

hello2 = hello.split("e")  // 'h','llo' ---'e'가 없어짐
console.log(hello2)
console.log(typeof hello2)

//['2024','11','06']
//date = "2024-11-06"
date = date.split("-")
console.log(date)


/* ------------------------- 배열 --------------------------- */
console.log("-------array method---------")
let arr1 = [1,2,3,4,5]
let arr2 = ["quakka", "rabbit", "puppy", "hamster"]

arr1[5]=6
arr1[8]=6 //맨 끝번호를 모르면 빈칸이 나옴
console.log(arr1)
arr1 = [1,2,3,4,5]
arr1.push(6)  // 배열 끝에 추가
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop()) // 제거하는 값을 반환
arr1.pop()
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")  // 맨 앖에 array추가
console.log(arr2)
console.log(arr2.shift())  // 제거하는 값 반환
console.log(arr2)

// 배열.includes(요소) 배열에 요소가 있는지 없는지 확인
console.log(arr2.includes("cat"))
console.log(arr2.includes("quakka"))

arr1=[1,2,3,4,5]
console.log(arr1.length)

console.log(arr1.indexOf(4)) // 3 --- 요소가 몇 번 인덱스에 있는지 확인

// reverse() : 순서 뒤집기
arr1.reverse()
console.log(arr1)  // 기존 배열이 변경됨

// join(''),배열 -> 문자열로 병합
str1 = arr1.join()
console.log(str1)  
// join의 인자로 아무것도 전달이 되지 않으면,
//배열 안의 컴마까지 같이 문자열로 반환됨
console.log(str1)
str1 = arr1.join('')
console.log(str1)


//for of, forEach
let arr3 = [1,5,3,4,5,]
let alphabets = ['a','b','c','d','e','f']

// 기본 for 문
for(let i=0; i <arr3.length;i++){
    console.log(arr3[i])
}

// for of 문
for(let el of arr3){   //i++ 필요없이 배열에서 간단히 반복해줌
    console.log(el)
}

// forEach(익명함수)
// forEach(function(a[,b,c]))
arr3.forEach(function(num,i,arr){
    console.log("요소",num)
    console.log("배열의 인덱스",i)
    console.log("arr3",arr)
    console.log("---------")
})

arr3.forEach((el)=>{
    console.log(el)     //for of문이랑 forEach문이랑 똑같이 작동하는 것을 볼 수 있음.
})


arr2 = ["quakka", "rabbit", "puppy", "hamster"]
// filter, map, find
// 매개변수로 들어가는 익명함수에 리턴값이 필수
console.log('-----filter-----')
// return 이후의 조건에 만족하는 요소를 찾아서
// 새로운 배열로 반환
let six = arr2.filter(function(el){
    return el.length === 6  //6자 인 것만 반환
})
console.log(six)

console.log('---find---')
let six2=arr2.find(function(word){
    return word.length === 6
})
console.log(six2)

console.log('----map----')
let arr4 = [1,2,3,4,5]
let multiArr = arr4.map(function(number){
    return number *3
})

//메소드 체이닝 --- return을 포함하고 있다고 생각하면 됨.
multiArr = arr4.map((number)=> number *3)  

console.log(multiArr)

// 오브젝트 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};
//for in문
for(let area in areaNum){
    console.log(area)    // area = key --->문자열로 반환중
    // 값에 접근 할려면?   -----> 대괄호 접근법으로만 사용 가능.
    console.log(areaNum[area])
    // console.log(areaNum.area) --> 불가능
}