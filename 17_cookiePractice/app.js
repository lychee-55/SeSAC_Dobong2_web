const cookieParser = require("cookie-parser")
const { sign } = require("crypto")
const express = require("express")
const app = express()
const PORT= 8080

app.set("view engine","ejs")

// TODO: 쿠키 미들웨어 설정
app.use(cookieParser("secret"))

app.get("/",(req,res)=>{
    // TODO: 쿠키 값 가져오기
    // cookie값 접그
    // - req.cookies : 암호화되지 않은 쿠키
    // - req.signedCookies : 암호화 된 쿠키
    console.log("cookies",req.signedCookies) // {}
    res.render("index", { popup: req.signedCookies.popup })  //hide
})

app.post("/set-cookie",(req,res)=>{
    // 쿠키 생성하기
    res.cookie("popup","hide",{
        signed: true, // 암호화된 쿠키
        maxAge: 1000*60*60*24, // 24시간 쿠키
    })
    res.send("쿠키생성 성공!")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})