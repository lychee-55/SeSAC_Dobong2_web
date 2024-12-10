const cookieParser = require("cookie-parser")
const { sign } = require("crypto")
const express = require("express")
const app = express()
const PORT= 8080

app.set("view engine","ejs")

// TODO: 쿠키 미들웨어 설정
app.use(cookieParser())

const cookieConfig={
    maxAge: 24*60*60*1000,
    expires:new Date(2024,12,10),
    httpOnly: true,
    signed: false,

}

app.get("/",(req,res)=>{
    if(req.cookies){
        res.render("index",{popup : req.cookies.pracCookie})
    }else{
        res.render("index")
    }
    // TODO: 쿠키 값 가져오기
    // res.render("index", {popup:쿠키값})
})

app.post("/set-cookie",(req,res)=>{
    // 쿠키 생성하기
    res.cookie("pracCookie","cookies",cookieConfig)
    res.send("쿠키생성 성공")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})