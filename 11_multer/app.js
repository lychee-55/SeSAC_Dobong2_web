const { spawn } = require('child_process');
const express= require('express');
const multer = require("multer");
const path = require("path")
const app = express();
const PORT= 8000;


/* 미들웨어 설정 */
// 1. view engine설정
app.set("view engine","ejs")
app.set("views","./views")

// 2. body-parser 설정
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// 3. static 폴더 설정
// __dirname : 현재 폴더의 위치 
app.use('/static',express.static(__dirname+'/public'))
app.use('/uploads',express.static(__dirname+'/uploads')) // 읽어오기 위해 추가 설정 한 것.

// 4. multer 설정
const upload = multer({ //upload라는 객체를 만드는 중
    dest: "uploads/",       // 실제로 파일을 만들어서 올리는 것은 여기서 하는 중, 어디에 저장될지
})

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination:function(req, file, done){  // done 은 콜백함수라 생각
            done(null,"uploads/")  // 어디에 저장될지 경로를 선택하는 중
            // upload라는 폴더가 미리 만들어져 있어야 함.
        },
        filename:function(req, file, done){
            // const extension = path.extname(파일이름.확장자) >> 확장자만 리턴
            const extension = path.extname(file.originalname)  // .png, .webp,...
            // path.basename(파일이름.확장자, 확장자)  >> 파일이름만 리턴 // 001.png
            done(
                null, 
                path.basename(file.originalname,extension) + Date.now() + extension)

                console.log("path.basename",path.basename(file.originalname,extension))
                console.log("path.extname",path.extname(file.originalname))
            /*
file = {
  fieldname: 'userfile',  // 폼 내부에 정의한 name 값
  originalname: '001.png', // 원본 파일명
  encoding: '7bit',         // 파일 인코딩 타입
  mimetype: 'image/png',    // 파일 타입
  destination: 'uploads/',  // 파일 저장 경로
  filename: '2d592963010a1572c6aaaea2932b43c3', // 저장된 파일명
  path: 'uploads\\2d592963010a1572c6aaaea2932b43c3', //upload된 파일 전체 경로
  size: 28508  // 파일 크기 (byte 기준)
}
*/        
        }
    }),
    limits: {fieldSize:5*1024*1024}, // 5MB
})

app.get("/",(req,res)=>{
    res.render("index")
})

app.post('/upload',uploadDetail.single('userfile'),(req,res)=>{
    console.log(req.body)   // 파일 정보는 req.file에서 확인
    console.log(req.file)
/*
{
  fieldname: 'userfile',  // 폼 내부에 정의한 name 값
  originalname: '001.png', // 원본 파일명
  encoding: '7bit',         // 파일 인코딩 타입
  mimetype: 'image/png',    // 파일 타입
  destination: 'uploads/',  // 파일 저장 경로
  filename: '2d592963010a1572c6aaaea2932b43c3', // 저장된 파일명
  path: 'uploads\\2d592963010a1572c6aaaea2932b43c3', //upload된 파일 전체 경로
  size: 28508  // 파일 크기 (byte 기준)
}
*/
    res.send("응답!")
})

// 하나의 input에 여러개 파일이 옵니다.
// .array() 사용
app.post('/uploads/array',uploadDetail.array('multifiles'),(req,res)=>{
    // console.log(req.file)  // undefined
    console.log(req.files)  // 파일 여러 개일 때는 files로 확인!
    /*
    [
  {
    fieldname: 'multifiles',
    originalname: '26139_img.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: '26139_img1732518396198.png',
    path: 'uploads\\26139_img1732518396198.png',
    size: 469955
  },
  {
    fieldname: 'multifiles',
    originalname: 'pooh.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'pooh1732518396206.png',
    path: 'uploads\\pooh1732518396206.png',
    size: 718119
  }
]
    */
    
    console.log(req.body)
    res.send("업로드 완료!")
})

// 여러개의 input에 파일 업로드
// .fields() 사용
// fields의 매개변수는 배열[{name:'name값1',...}]
app.post('/uploads/fields',uploadDetail.fields([{name:'file1'},{name:'file2'},{name:'file3'}]),(req,res)=>{
    // upload.fields() 로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.files)
    console.log(req.body)
    /*
        {파일name1(=name 키의 값):[{업로드 파일 정보}], 파일name2:[{업로드 파일 정보}],...} 
    */
    res.send('업로드 완료!')
})

// 동적폼 파일 업로드
app.post('/dynamicUpload',uploadDetail.single('dynamicFile'),(req,res)=>{ // single(append에 넣은 이름과 똑같아야함.)
    console.log(req.file)  // 파일 정보
    console.log(req.body)  // 파일 외 기타정보(text)
    /*
    {
  fieldname: 'dynamicFile',
  originalname: 'beach3.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'uploads/',
  filename: 'beach31732520708416.jpg',
  path: 'uploads\\beach31732520708416.jpg',
  size: 44357
}
  */
    // 하나의 객체에 합쳐서 보내는 방법 (전개연산자)
    // res.send({...req.body,...req.file}) // 이렇게 합쳐서 보낼수 있음. 혹은 ↓
    res.send({file: req.file, fileInfo: req.body})
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

