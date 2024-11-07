let sum = 0;
let arr = []

// for문
for(let i = 1; i<=100; i++){
    sum+=i
}
console.log(sum)

// for of문

for(let num of arr){
    sum+=num
}
console.log(sum)

//forEach문
arr.forEach(function(sum,i,arr){
    sum+=i
});
console.log(sum)

// 주말? 평일?
let now = new Date()
if(now>=1 && 5<=now){
    console.log('평일')
}else{
    console.log('주말')
}

// 랜덤 숫자 뽑기
console.log(Math.random())
console.log(Math.random()*11)
console.log(Math.floor(Math.random()*11))



// 내장 메소드 실습
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]

let same = []
let diff = []

for(let fruit of fruits1){
    //2번 배열에서 fruit(1배열)이 포함되었 때
    if(fruits2.includes(fruit)){
        same.push(fruit)  //same배열에 넣기
    }else{
        diff.push(fruit)  // 아닐시, diff 배열에 넣기
    }
}
console.log(same)
console.log(diff)

// for문 작성
for(i=0; i<=fruits1.length; i++){
    if(fruits2.includes(fruits1[i])){
        same.push(fruits1[i])  //same배열에 넣기
        break
    }else{
        diff.push(fruits1[i])  // 아닐시, diff 배열에 넣기
    }
}
console.log(same)
console.log(diff)

/*
// for each로 작성
fruits1.forEach(function(sum,i,fruits1){
    if(fruits2.includes(fruits1[i])){
        same.push(fruits1[i])  //same배열에 넣기
    }else{
        diff.push(fruits1[i])  // 아닐시, diff 배열에 넣기
    }
});

console.log(same)
console.log(diff)
*/