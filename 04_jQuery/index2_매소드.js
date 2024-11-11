/* input value 설정 및 가져오기 */
// val()
function getValue(){
    let value = $('input').val()
    alert(value)
}

function setValue(){
    $('input').val('다른 글자로 설정!')
}

/* CSS 바꾸기 */
// css()
function changeCssJS(){
    let span = document.querySelector('span')
    span.style = 'font-size:20px; color:red;'
}
function changeCssJQ(){
    $('span').css('font-size','40px')
    $('span').css('color','blue')
}
/* attr 바꾸기 */
// attr()
function changeAttrJS(){
    let a = document.querySelector('a')
    a.setAttribute('href','http://www.naver.com')
}
function changeAttrJQ(){
    $('a').attr('href','https://www.daum.net')
}

/* text 바꾸기 */
// text()
function changeTextJS(){
    let p = document.querySelector('.p-text')
    p.innerText='js로 바꾼 내용입니다.'
}
function changeTextJQ(){
    $('.p-text').text('jQ로 바꾼 내용입니다.')
}

/* html 바꾸기 */
// html()
function changeHtmlJS(){
    let p = document.querySelector('.p-html')
    p.innerHTML='<em>javascript</em>'
}
function changeHtmlJQ(){
    $('.p-html').html('<h2>jQuery</h2>')
}

/* 요소 추가하기 */
// append()
function appendJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText='마지막 자식으로 추가된 li(js)'

    ul.append(li)
}
function appendJQ(){
    $('.colors').append('<li>마지막 자식으로 추가된 li(jQ)</li>')
}

// prepend()
function prependJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '앞에 추가된 li(js)'
    
    ul.prepend(li)
}
function prependJQ(){
    $('.colors').prepend('<li>앞에 추가된 li(JQ)</li>')
}

// after()
function afterJS(){
    let ul = document.querySelector('.orange')
    let li = document.createElement('li')
    li.innerText= '다음 형제로 추가된 li (js)'

    ul.after(li)
}
function afterJQ(){
    $('.orange').after('<li>다음 형제로 추가된 li(JQ)</li>')
}

// before()
function beforeJS(){
    let ul = document.querySelector('.navy')
    let li = document.createElement('li')
    li.innerText= '이전 형제로 추가된 li (js)'

    ul.before(li)
}
function beforeJQ(){
    $('.navy').before('<li>이전 형제로 추가된 li(JQ)</li>')
}

/* 요소 삭제하기 */
// remove()
function removeJS(){
    let li2 = document.querySelector('.li2')
    li2.remove()
}
function removeJQ(){
    $('.li2').remove()
}

// empty()
function emptyJS(){
    let nums = document.querySelector('ul.nums')
    nums.innerHTML = ''   //자바스크립트는 empty가 없음.
}
function emptyJQ(){
    $('ul.nums').empty()
}

/* 요소 탐색하기 */ 

// 요소 탐색하기
function findParent(){
    console.log($('.child2').parent())
}
function findParents(){
    console.log($('.child2').parents())
}
function findNext(){
    console.log($('.child2').next())
}
function findPrev(){
    console.log($('.child2').prev())
}
function findChildren(){
    console.log($('.parent').children())
}

// 클래스 조작하기
function addClass(){
    $('#hi').addClass('fs-50')
}
function removeClass(){
    // $('#hi').removeClass('color-blue')
    $('#hi').removeClass() // 클래스 모두 제거
}
function hasClass(){
    console.log($('#hi').hasClass('fs-50'))
}
function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}