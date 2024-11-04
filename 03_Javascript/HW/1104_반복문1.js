// let num = Number(prompt('숫자를 입력하세요'))

// for(let i=1; i <= 10000; i++){
//     // 13의 배수 && 홀수
//     if(i % 13 === 0 && i % 2 == 1){
//         console.log(i)
//     }
// }

// let sum = 0
// for(let i=0; i<=100; i++){
//     if(i % 2 ===0 || i % 5 === 0){
//         sum+=i
//     }
// }
// console.log(sum)

for(let i=2; i<=9; i++){
    console.log(`---${i}단---`)
    for(let s=1; s<10; s++){
        console.log(`${i} x ${s} = ${i * s}`)
    }
}

