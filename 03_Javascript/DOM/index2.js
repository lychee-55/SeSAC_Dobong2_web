/* 1. 태그 내부 내용 */
/*
- innerText
- textContent
- innerHTML
*/
let div1 = document.getElementById('div1')
div1.innerText='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /' // 문자열로 읽힘
//2칸 이상의 공백문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText)

div1.innerHTML='여기는 <b>첫번째</b> 태그입니다.&hearts;' // 태그로 읽힘

div1.textContent='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /' // 문자열로 읽힘
console.log(div1.textContent)