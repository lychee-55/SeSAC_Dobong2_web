/*
동작의 종류: click, dbclick, scroll, change, submit, ...
- addEventListener(동작의 종류,function(){})
    > 선택 요소.addEventListener(동작의 종류,function(){})
- <태그 onchange="함수의 이름" onclick="함수의 이름"></태그>
on[동작의 종류] 속성으로 이벤트 제어 가능
*/

const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')

// > 선택 요소.addEventListener(동작의 종류,function(){})
btn1.addEventListener("click",function(){
    console.log('버튼 1이 클릭되었습니다!')
    alert('버튼1을 클릭하셨군요!')
})

btn1.addEventListener("mouseover",function(){
    // this는 자기 자신을 가리킴.
    // = btn1.style.backgroundColor = "aqua"
    this.style.backgroundColor = "aqua"
})

// ** btn2 를 눌렀을 때, div를 자식으로 붙이기
const container = document.getElementById('container')
btn2.addEventListener("click",()=>{
    let div = document.createElement('div')
    div.innerText = 'Hi!'
    div.style.backgroundColor = 'pink'

    container.append(div)
})

//** btn3 -만들어진 div의 배경색 바꾸기
// 함수 호출시 괄호 필수적으로 생략해아함, 괄호 작성시 즉시 호출.
btn3.addEventListener('click', changeColor)
// btn3.addEventListener('click', changeColor)  // 재사용하는 함수 만들 수 있음.

function changeColor(){
    const divs = document.querySelectorAll("#container div")  //container의 자식을 가져오는중. = container>div
    // [div,div,div,...]
    for(let div of divs){
        div.style.backgroundColor="skyblue"
    }

    // 막내요소만 노랑색으로 변경
    const lastdiv = divs[divs.length - 1]
        lastdiv.style.backgroundColor="yellow"
}

//** btn4 - 배경색 노란색 변경, 글자색 검정색 변경  */
btn4.addEventListener('click', changeBtnColor)
function changeBtnColor(){
    this.style.backgroundColor="yellow"
    this.style.color = "#000"
}

//** btn5 - alert창 띄우기
// html에서 작성
function sayHi(){
    alert('안녕하세요! 버튼 5입니다!')
}

// ==========================================================
const btn = document.querySelector('button')
const input = document.querySelector('input')

/* 1.[클릭 이벤트] */
btn.addEventListener('click',function(event){
    // 클릭 이벤트에 관한 정보 (event 객체)
    console.log(event)

    // 어떤 요소가 클릭되었는지 확인 가능
    console.log(event.target)
})

// ==========================================================
/* 2. [키보드 이벤트] */
input.addEventListener('keydown',function(event){
    // console.log(event)
    
    // 방향키 아래, 위, 왼쪽, 오른쪽
    console.log(event.code)
    console.log(event.key)
    // console.log(event.keyCode)
    if(event.code==="ArrowLeft"){
        console.log('왼쪽 방향기 눌렀습니다.')
    }else if(event.code==="ArrowRight"){
        console.log('오른쪽 방향기 눌렀습니다.')
    }else if(event.code==="ArrowUp"){
        console.log('위쪽 방향기 눌렀습니다.')
    }else if(event.code==="ArrowDown"){
        console.log('아래쪽 방향기 눌렀습니다.')
    }else{
        console.log('방향키가 아닌 키보드 누르는 중..')
    }
})

// ==========================================================
/* 3. [scroll 이벤트] */
// console.log(window)   // 브라우저 창을 의미함

/*
window.addEventListener('scroll',(event)=>{
    // console.log(event)
    // console.log(event.target)
    console.log(scrollY) //scroll 위치 확인중

    //scrollY가 780에서  div opacity가 1이 되도록 
    if(scrollY > 1000){
        document.querySelector('.pos').style.opacity="1"
    }
})
*/

// ==========================================================
// form 이벤트
/* 4. [submit 이벤트]  */
const todoForm = document.querySelector('#todo-form')  // form태그
const todos = document.querySelector('.todos')         // ul태그

todoForm.addEventListener('submit',function(event){
    event.preventDefault(); // 새로고침 막음
    // form이 제출 되는 것을 취소 시킴, 이벤트 전달을 막는 방법

    console.log('submit')

    // 폼 내부의 input창 선택
    const todoInput = document.querySelector('input[name="todo"]')
    console.dir(todoInput)  // 요소가 가지고 있는 데이터를 출력
    // console.log(todoInput.value)   // 문자열 차입으로 가져옴.

    // (!!!) 공백으로 들어오는 문자는 추가되지 않도록
    const todo = todoInput.value.trim()
    
    console.log('todo:'+todo)  // ""일 때 막아주기!
    if(todo !==""){
        // 선택된 ul태그의 자식으로 <li>todo</li> 붙이기
        let li = document.createElement('li')
        li.textContent= todo 
        todos.append(li)
    }else{
        alert("오늘의 할 일을 작성 해주세요!")
    }

    todoInput.value=" "
})

// =========================================================
/* 5. [change 이벤트] */
const chgInput = document.querySelector('#change-input')
chgInput.addEventListener('change',function(){
    console.log('changed!!')
})

chgInput.addEventListener('input',function(){
    console.log('changing!!')  
    // input 창의 value에 변경이 발생되면 일어나는 이벤트

    let intro = document.querySelector('.intro')
    intro.innerHTML = this.value       // 미리보기 만들기
})