const express = require("express")
const session = require("express-session")
const app = express()
const PORT= 8080

app.set("view engine","ejs")
app.use("/static",express.static(__dirname + "/static"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// 세션 설정, 10분 뒤 세션 종료하도록 설정
app.use(session({
    secret: "secretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly: true,
        maxAge: 10*60*1000
    }
}))

app.get("/",(req,res)=>{
    // 로그인이 안된 유저라면 > { isLogin : false }
    // 로그인 된 유저라면 > { isLogin : true, user:user }
    if(req.session.name){
        res.render("index",{isLogin:true,userId:req.session.name})
    }else{
        res.render("index",{isLogin:false})
    }
})

app.get("/login",(req,res)=>{
    res.render("login")
})

const userInfo = {
    userId: "cocoa",
    userPw: "1234"
}

// POST /login  -- 실제 로그인 진행, 일치하면 로그인 (세션 연결)
app.post("/login",(req,res)=>{
    console.log(req.body) //{ id: '1111', pw: '1111' }
    // 세션의 user 라는 키를 추가하여 userId값을 value로 전달
    
    const {userId, userPw} = userInfo
    
    if(req.body.id===userId && req.body.pw===userPw){
        // res.render("index",{ isLogin: true, userId: req.body.id})
        req.session.name= userId;
        console.log(req.session)   
    /* Session {
    cookie: {
    path: '/',
    _expires: 2024-12-10T03:04:29.274Z,
    originalMaxAge: 600000,
    httpOnly: true
    },
    name: 'cocoa'
    } */
        res.redirect("/")
        // res.send({id:req.sessionID,name:req.session.name})
    }else{
        console.log("아이디 또는 패스워드가 맞지 않습니다!")
        res.send(`<h2>아이디 또는 패스워드가 맞지 않습니다!</h2>`)
    }
    // res.send(req.body.id)
})

// GET /logout -- destroy, 실제 로그인 진행(세션 삭제)
app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err

        // res.send("세션 삭제 완료")
        console.log("session 삭제 완료!")
        console.log(req.session)
        res.redirect("/")
    })
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})