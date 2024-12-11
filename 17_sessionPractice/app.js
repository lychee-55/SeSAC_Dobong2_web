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

// 임시 DB
const userInfo = {
    userId: "cocoa",
    userPw: "1234"
}

app.get("/",(req,res)=>{
    // 로그인이 안된 유저라면 > { isLogin : false }
    // 로그인 된 유저라면 > { isLogin : true, user:user }
    if(req.session.user){
        const user = req.session.user
        res.render("index",{isLogin: true, user: user})
    }else{
        res.render("index",{isLogin:false})
    }
})

app.get("/login",(req,res)=>{
    // 로그인 된 유저라면 메인페이지로
    // 로그인이 안된 유저라면 로그인페이지로
    const user = req.session.user
    if(user){
        res.redirect("/")
    }else{
        res.render("login")
    }
})


// POST /login  -- 실제 로그인 진행, 일치하면 로그인 (세션 연결)
app.post("/login",(req,res)=>{
    // 로그인 여부 판단
    if(
        userInfo.userId === req.body.id &&
        userInfo.userPw === req.body.pw
    ){
        // console.log("로그인 가능한 user")
        // 세션 생성
        req.session.user = req.body.id
        console.log(req.session)
        /*
        Session {
            cookie: {
              path: '/',
              _expires: 2024-12-11T02:25:18.547Z,
              originalMaxAge: 600000,
              httpOnly: true
            },
            user: 'cocoa'
          } 
        */
        res.redirect("/")
    }else{
        // console.log("로그인 불가능한 user")
        res.send(`
            <script>
                alert("아이디 또는 비밀번호가 틀렸어요. 다시 시도하세요")
                document.location.href="/login"
            </script>
            `)
    }
    // res.send("응답완료!")
})

// GET /logout -- destroy, 실제 로그인 진행(세션 삭제)
app.get("/logout",(req,res)=>{
    // 세션 삭제
    console.log("GET /logout",req.session)
    const user = req.session.user
    if(user){
        // 로그인 된 유저라면 >> 로그아웃 시켜주기 
        req.session.destroy((err)=>{
            if(err) throw err
            res.redirect("/")
        })
    }else{
        // 로그인 안 된 유저(세션이 만료된 유저, 세션 생성 10분 후)
        res.send(`
            <script>
                alert("이미 세션이 만료 되었어요!");
                document.location.href="/";
            </script>
            `)
    }
    
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})