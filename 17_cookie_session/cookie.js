const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const PORT = 8080

// ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser())

// ver2. 암호화된 쿠키
app.use(cookieParser("secret key"))  
// 실제로 암호화 쿠키를 사용한다면, 비밀키도 .env로 관리하는 것이 좋다. 문자열 아무거나 상관없음.

app.set("view engine","ejs")

// cookie 설정 객체
const cookieConfig = {
    // maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위. ex) 1000*60*5
    // expires: 만료날짜 GMT시간 설정. ex) new Date(2024,11,9)
    // httpOnly: 프론트에서 document.cookie로 접속하는 것을 차단, 
    //           http통신으로만 접근할 수 있는 쿠키 ---> (true/false)
    // path: 원하는 경로에서 쿠키 설정 가능  ex) "/", "/abc"
    // secure: 웹브라우저와 웹서버가 https로 통신할 경우에만 쿠키 전송 ---> (true/false)
    // signed: 쿠키 암호화 여부 ---> (true/false)

    maxAge: 10 * 60 * 1000, //수명 1분 
    httpOnly: true,  // 프론트에서 쿠키 접근 막기
    // signed: false, // ver1.
    signed: true,  // ver2.
}

const cookieConfig2 = {
    maxAge: 10*60*1000,
    httpOnly: true,
    path:"/abc",
}

app.get("/abc",(req,res)=>{
    res.cookie("abc-page","abc page cookie", cookieConfig2)
    res.render("cookie-another")
    // 상위경로에서 만든 쿠키는 하위 경로에서 보이지만 반대로는 안됨
    // 현재 "/abc"의 상위경로는 "/"
})

app.get("/",(req,res)=>{
    res.render("cookie")
})

// 쿠키설정 - /setCookie
app.get("/setCookie",(req,res)=>{
    // res.cookie("쿠키이름","쿠키값","쿠키 옵션값")
    res.cookie("myCookie","cookie~",cookieConfig)
    // 암호화된 쿠키/ 암호화 되지 않은 쿠키
    // 모두 res.cookie()로 쿠키 설정

    res.send("set cookie 완료, 응답 종료~")
})
// 쿠키값 가져오기 - /getCookie
app.get("/getCookie",(req,res)=>{
    /* ver1. 암호화 되지 않은 쿠키 */
    // console.log(req.cookies) // { user: 'sesac', myCookie: 'cookie~' }
    // res.send(req.cookies) // {쿠키: 쿠키값,...} 넘겨서 보내줘야함
    
    /* ver2. 암호화된 쿠키 */
    console.log("암호화된 쿠키",req.signedCookies)
    res.send(req.signedCookies)
})

app.get("/clearCookie",(req,res)=>{
    res.clearCookie("myCookie","cookie~",cookieConfig)
    res.send("clear cookie, 응답종료!")
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

/*
ver1. 암호화 하지 않았을 때
- 미들웨어 설정 >> app.use(cookieParser())
- 쿠키 설정 >> res.cookie(쿠키이름, 쿠키값, 쿠키 옵션 객체)
- 쿠키 확인 >> req.cookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(쿠키이름, 쿠키값, 쿠키 옵션 객체)
- clearCookie(), cookie()는 응답완료를 하지 않음.
    이후에 render, send, end, redirect... 등으로 응답완료 작업 해야함!
    - 삭제할 때는 이름, 값, 옵션이 일치해야 삭제 가능!

ver2. 암호화 했을 때
- 미들웨어 설정 >> app.use(cookieParser("임의의 문자열"))
- 쿠키 설정 >> res.cookie(쿠키이름, 쿠키값, 쿠키 옵션 객체)
    - 쿠키 옵션 객체의 signed 값이 true
- 쿠키 확인 >> req.signedCookies 객체에서 확인
- 쿠키 삭제 >> ver1. 과 동일
*/