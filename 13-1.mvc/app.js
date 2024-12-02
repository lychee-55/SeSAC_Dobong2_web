const express = require("express")
const app = express()
const PORT = 8000

// 미들웨어 뷰엔진, BODYPARSER
app.set("view engine", "ejs")
app.set("views","./views")
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// 라우트 불러오기 
const indexRouter = require("./routes/user")
app.use('/',indexRouter)

// const loginRouter = require("./routes/user")

app.listen(PORT,()=>{
    console.log(`http://www.localhost:${PORT}`)
})