const express = require("express")
const app = express()
const PORT = 8000

// 미들웨어 뷰엔진, BODYPARSER
app.set("view engine", "ejs")
app.set("views","./views")
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const realID = "lychee"
const realPW = "1234"

app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/axiosPost',(req,res)=>{

    if(realID === req.body.userID && realPW === req.body.userPW){
        res.send({Success : true, userID : req.body.userID})
    }else{
        res.send({Success: false})
    }
})

app.listen(PORT,()=>{
    console.log(`http://www.localhost:${PORT}`)
})