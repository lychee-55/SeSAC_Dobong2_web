const express = require("express");
const app = express();
const PORT= 8080;
/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine","ejs")
app.set("views","./views")

// 2. body-parser설정
app.use(express.urlencoded({ extended: false}))
app.use(express.json())  

/* API */
app.get("/",(req,res)=>{
    res.render("index")
})

// /ajax GET
app.get('/ajax',(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})

app.post('/ajax',(req,res)=>{
    // body-parser 설정을 해야 req.body를 읽을 수 있음.
    console.log(req.body)
    res.send(req.body)
})

/* axios 요청 */
//  /axios GET
app.get("/axios",(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})