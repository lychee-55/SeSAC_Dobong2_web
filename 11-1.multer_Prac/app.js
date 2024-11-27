const express = require("express")
const multer = require("multer")
const path = require("path")
const app = express()
const PORT = 8080

/* 미들웨어 설정 */
// 1. view engine 설정
app.set("view engine", 'ejs')
app.set("views","./views")  // default값이라 안해도 됨.

// 2. body-parser 설정
app.use(express.urlencoded({extended: true}))  // true, false 상관없음
app.use(express.json())

// 3. static 폴더 설정
app.use("/uploads",express.static(__dirname+"/uploads")) // 현재폴더를 불러올 때 upload라고 쓰겠다.
app.use("/static",express.static(__dirname+"/static"))

// 4. multer 설정
const uploadSetting = multer({
    storage: multer.diskStorage({
        destination(req,file,done){  // 어디로 저장
            done(null,"uploads/")  
        },
        filename(req,file,done){  // 어떤 이름으로 저장
            const ext = path.extname(file.originalname)  // 파일 이름만 가지고옴,,확장자
            // userid, name, pw, file...
            // req.body.userid == "id"
            done(null, req.body.userid + Date.now() + ext)
        }
    }),
    limits:{fieldSize:5*1024*1024},
})


app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/register',uploadSetting.single('profileImg'),(req,res)=>{
    console.log(req.body)
    /*
    {
  userid: 'asd',
  pw: 'sada',
  userName: 'sada',
  age: '123'
}
    */
    console.log(req.file)
    /*
    {
  fieldname: 'profileImg',
  originalname: 'pooh.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'asd1732677626019.png',
  path: 'uploads\\asd1732677626019.png',
  size: 718119}
     */
    // res.send("요청 잘 받았다!")
    // res.render('result',{
    //     userInfo: req.body,
    //     src:req.file.path,
    // })
    res.render('result',{
        ...req.body,  // ejs에서 name,userid등 바로 접근 가능, 기존엔 userinfo.name이런방식
        src:req.file.path,
    })
})

app.listen(PORT,()=>{
    console.log(`http://www.localhost:${PORT}`)
})