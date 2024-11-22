// require나 import할때는 맨위에 작성하는 것을 권장!

// module1.js의 모든 데이터 객체 형태로 가져오기

// require방식으로 module01 불러오기
const module1 = require('./03_module01.js')
console.log(module1)  // module에서 객체형태로 내보냈기 때문데 객체형태로 불러오고 있음.

// 가지고 오고 싶은 데이터만 가져오기(객체 구조분해 할당)
const {colors} = require('./03_module01.js')
console.log(colors)   // color만 가지고 옴 

// 가져오는 방식은 똑같음!
const module2 = require('./03_module02.js')
console.log(module2)

const {name, sayHi} = require('./03_module02.js')
console.log(name)
sayHi()