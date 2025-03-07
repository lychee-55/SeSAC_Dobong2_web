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

/* 2. 속성에 접근 */
/*
- 요소.속성명
- getAttribute(): 속성값 가져오기
- setAttribute(): 속성값 설정하기
*/

//pooh, naver 아이디
let naver = document.getElementById('naver')
console.log(naver)

// naver.setAttribute('속성이름','바꿔줄 속성 값')
naver.setAttribute('href','http://www.google.com')

console.log(naver.href)
console.log(naver.getAttribute("href"))

console.log(document.querySelector('#pooh').src)  // css 선택자
// 'pooh'에서 '푸사진'변경
document.querySelector('#pooh').alt= "푸사진"  // css 요소변경 -- 속성명.속성값을 통해 변경가능 

/* 3. CSS 변경 */
let h1 = document.querySelector('h1')
let list = document.querySelectorAll('li')
// console.log(h1)
// console.log(list)

// 배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
// list[0].style --> list는 바로 .style을 통해 고칠 수 없음.
for(let el of list){
    //el.style.color = "#fff"
    //el.style.backgroundColor = "pink"
    //el.style.fontSize = "1.3rem"
    //el.classList.add('friends') // 미리 style class를 만들어 해당 리스트에 추가 적용 하는 방식.
}

h1.classList.add('add-h1')     // 추가하고 싶은 class이름 작성
h1.classList.remove('add-h1')  // 삭제하고 싶은 class 이름 작성
h1.classList.toggle('add-h1')  // add와 remove를 포함, 있으면 삭제 없으면 추가.

// 클래스가 있는지 없는지 확인 >> true, false "반환"
console.log(h1.classList.contains('add-h1'))
console.log(h1.classList.contains('add-h2'))
console.log(h1.classList) // 선택된요소의 클래스 목록 확인

/* 4. 부모, 자식, 형제 노드 찾기 */
let friends = document.querySelector('#friends') 
let tigger = document.getElementById('tigger')

console.log('---자식 노드 접근---')
// 배열 형태로 가져옴.
console.log(friends.children)
console.log(friends.children[0])

console.log('---부모 노드 접근---')
// 배열 형태가 아닌 요소 자체를 가져옴.
console.log(tigger.parentNode)

console.log('---형제 노드 접근---')
// 배열 형태가 아닌 요소 자체를 가져옴.
console.log('이전 형제',tigger.previousElementSibling) 
console.log('다음 형제',tigger.nextElementSibling) 

/* 5. 노드 생성, 추가, 삭제*/
let container = document.querySelector('.container')

// 요소 생성
let p = document.createElement('p')  // 생성하고자 하는 태그 넣기
p.innerText = "새로 추가된 p"  // 컨텐츠 삽입
p.style.fontWeight = "700"
p.style.background = "red"

// 요소 추가 !!!!!!!!
container.append(p)  // 선택된 요소(container)의 맨 뒤 자식요소로 추가됨.

let p2 = document.createElement("p")
let p3 = document.createElement("p")

p2.innerText = 'p2'
p3.textContent= 'p3'

p2.classList.add('p-2')
p3.classList.add('p-3')

// container.append(p2)
// container.appendChild(p3)   글자추가 불가능,여러 태그 추가 불가능

container.append(p2,p3,"안녕하세요")  // append는 차례대로 추가, 글자 추가도 가능  

// prepend(): 선택된 요소의 맨 앞 자식으로 추가
// friends = document.querySelector('#friends') 
// li 태그를 만들고 '캉가', friends 클래스 추가
let li1 = document.createElement('li')

li1.textContent = '캉가'
li1.classList.add('friends')

friends.prepend(li1)

console.log(h1)
/* 형제요소만들기*/
// before() 
let h3 = document.createElement('h3')
h3.innerText = 'h3 tag'
h1.before(h3)

// after()
let h2 = document.createElement('h2')
h2.innerText = 'h2 tag'
h1.after(h2)

// 요소 삭제!  > remove(), removeChild()
let firstLi = document.querySelector('li')
console.log(firstLi)
let ul = firstLi.parentElement
// console.log(firstLi)
// console.log(ul)

// firstLi.remove()  // 선택된 요소가 삭제
// 삭제할 요소.remove()

ul.removeChild(firstLi)
// 부모요소.removeChild(삭제할 자식 요소)

// 실습  <div class="container"><div>
/* 
let div2 = document.createElement('div')
let img1 = document.createElement('img')
let span = document.createElement('span')

span.innerText = '이요르'

img1.setAttribute('src',"./img/26139_img.png")
img1.setAttribute('alt',"ddd")

container.append(div2)
div2.append(img1,span)
*/

// 풀이
const parentDiv = document.querySelector('.container')
const div = document.createElement('div')
const img = document.createElement('img')
const span = document.createElement('span')

span.innerText = '이요르'

img.setAttribute('src',"./img/26139_img.png")
img.alt = '이요르 사진'

div.append(img,span)
parentDiv.append(div)