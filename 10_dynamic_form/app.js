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

const realID ="banana"
const realPW = "4321"

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

//  /axios POST
app.post("/axios",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

/* fetch 요청 */
// /fetch GET
app.get("/fetch",(req,res)=>{
    console.log(req.query);
    // 클라이언트에서 .text()사용
    // res.send("응답완료!!")

    // 클라이언트에서 .json()사용
    res.send(req.query)  // 객체를 보낸다
})

// /fetch POST
app.post('/fetch',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

/* 외부 API 사용하기 */
app.get('/api',(req,res)=>{
    res.render("api")
})

/* 실습문제 */
app.get('/practice1',(req,res)=>{
    console.log(res.query)
    res.render("practice1")
})

app.get('/practice2',(req,res)=>{
    console.log(res.query)
    res.render("practice2")
})

// /axios-practice1 GET
app.get('/axios-practice1',(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})


// const realID ="banana"
// const realPW = "4321"

// /axiosPost-practice2 POST
app.post('/axios-practice2',(req,res)=>{
    console.log(req.body)
    // const {userID, userPW} = req.body
    if(realID === req.body.userID && realPW === req.body.userPW){
        res.send({ isSuccess: true, userID: req.body.userID })
    }else{
        res.send({ isSuccess: false })
    }
    // res.send("응답완료")
})

// 포트 열기
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})