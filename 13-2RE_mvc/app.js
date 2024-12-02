const express = require("express")
const { render } = require("../13-1.mvc/routes/user")
const app = express()
const PORT = 8000

// 미들웨어 설정
app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.urlencoded({extended:false}))
app.use(express.json())
// 라우터 불러오기
const indexRouter = require("./routes/index")
// const indexRouter = require("./routes") 파일이름이 index라면 default값이 index이기에 13,14는 똑같다.
app.use("/",indexRouter)

// 404 설정
app.get("*",(req,res)=>{
    res.send("<h2>Page Not Found</h2>")
})

// listen
app.listen(PORT,()=>{
    console.log(`http://www.localhost:${PORT}`)
})