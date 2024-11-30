const express = require("express")
const multer = require("multer")
const path = require("path")

const app = express()  // express를 하나의 객체에 담아둠.app이라는 변수를 통해서 서버에 진입.
const PORT = 8080      // 5000번은 MACOS에서 쓰고있는 경우가 있음.10000번 이내의 숫자 아무거나

let tempDB = [{
    contentID:1,
    title:"제목1",
    content: "토요일 수업..",
    img:null,
},
{
    contentID:2,
    title:"제목2",
    content: "토요일 수업..흐어어엉",
    img:"/static/img/pooh.png",
},{
    contentID:3,
    title:"제목3",
    content: "어려워요",
    img:null,
},{
    contentID:4,
    title:"제목4",
    content: "냥냥냥",
    img:null,
}]

const tempUser = "lychee냠"

/* 미들웨어 설정 */
// 미들웨어란>
// 요청(REQUEST)과 응답(RESPONSE) 사이의 중간 다리 역할을 수행하는 SW
// ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 'body-parser'
// ex2) request에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
// ex3) static 파일 설정을 도와주는 app.use(express.static(~))  == 정적파일 읽기(사진 등)

/* 미들웨어 1. views 설정 - set() 이용 | -- 사람들 눈에 보이는 view
1. html 파일을 어디에 모아둘건지
2. html 엔진을 어떤 걸 사용할건지
*/
app.set("views","./views")
app.set("view engine","ejs")

/* 미들웨어 2. static 폴더 설정 
- static 폴더란?
    외부(브라우저 등의 client)에서 접근 가능한 폴더
    프론트에서 사용하는 js, css, 이미지/ 동영상 등을 모아둔 폴더
*/
app.use('/static',express.static(__dirname+'/public'))  // 실제 경로는 public, (브라우저가) 접근할 때는 /static으로 접근
app.use('/uploads',express.static(__dirname+'/uploads'))
// console.log("dirname",__dirname)  -- 현재위치

/* 미들웨어 3. body-parser설정 
- req.body는 기본적으로 undefined로 설정되어 있는데,
  body-parser 가 req.body를 서버측에서 사용할 수 있도록 파싱(parsing)해줌

  - parse: 어떤 데이터를 우리가 원하는 데이터의 형태로 바꾸는 것!
      JSON.parse(): JSON을 우리가 원하는 객체형태로 파싱
      JSON.stringify(): 객체를 우리가 원하는 JSON으로 파싱
      body-parser: req.body를 우리가 사용할 수 있도록 파싱
*/
app.use(express.urlencoded({ extended:false }))
app.use(express.json())  // body요청을 json으로 추출해서 불러와라

/* 미들웨어 4. multer 설정(npm i multer, 설치 필요) 
- 참고 : multer의 dest 속성은 경로에 해당하는 폴더를 자동으로 만들어 주지만,
        세부설정이 어렵다.
        >> 대신, storage 설정을 사용할 것!
*/

const upload = multer({
    // dest:'/uploads'  -- 디테일한 확장자, 파일이름 등을 수정/설정 불가
    storage: multer.diskStorage({
        // ▽ 아래의 키값으로는 함수를 받아오고 그 함수의 인자로는 세가지가 온다
        destination: function(req, file, cb){
            cb(null, "uploads/")
        },
        filename: function(req, file, cb){
            // const 확장자 = path.extname("파일 이름.png") -- .png만 쏙 빼옴
            const ext = path.extname(file.originalname);
            // const filename = path.basename(원래 파일이름,확장자)
            const filename = path.basename(file.originalname, ext) + Date.now() + ext;
            // cb(null,"파일이름.png")
            cb(null, filename)

            // Date.now(): 1970.01.01 0시 0분 0초부터 현재까지 경과된 밀리초
        },
    }),
    limits : {
        fileSize : 5 * 1024 * 1024,
    },
});

// 요청= 클라이언트 -> 서버
// 응답= 서버 -> 클라이언트
app.get('/', (request,response)=>{
    // console.log(request)

    // send 와 render는 괄호에 안 넣어도 작동은 됨.
    // response.send("<h1>응답 완료<h1>")  
    // response.send({id: "lychee", pw: "1234"})  
    response.render("index",{
        user: tempUser,
        contentData: tempDB,
    })
})

/* GET 요청의
params vs. query
- params
  - 서버에서 url 표기 /sesac/:id
  - 클라이언트에서 요청 url /sesac/123
  - req.params를 통해 캑체로 확인할 수 있음.{id: '123'}
  - 서버에서 정해둔 순서에 맞게 parameter가 들어가야함
  - 네이버 블로그처럼 어떤 정보를 "조회"할 때 사용
- query
  - 서버에서 url 표기 /sesac
  - 클라이언트에서 요청 url /sesac?id=123
  - req.query를 통해 객체로 확인할 수 있음.{id : '123'}
  - 정해지지 않은 쿼리가 올 수 있음.
  - 검색 정렬, 필터링 기능
*/

app.get("/content/:contentID",(req,res)=>{
    // console.log(req.query)  // {}
    console.log(req.params) // { contentID: '2' }
    console.log(req.params.contentID) // 2
    
    // 객체 구조분해 할당
    // const data={name:"lychee",pw:"1234"}
    // const {name, pw} = data
    const {contentID} = req.params;
    // 아이디가 같으면 끄집어낼것
    // const contentData = tempDB.filter((obj)=>조건) // 요소를 모은 것을 새로 반환
    const contentData = tempDB.filter((obj)=>{
        return obj.contentID === Number(contentID)
    }) 
    const contentObj = contentData[0] // { contentID: 3, title: '제목3', content: '어려워요', img: null }
    console.log(contentObj) // undefined or {}(obj객체)
    // 참고용 const array = [1,2,3,4,5]
    // const newArray = array.filter((num)=>{
    //     return number == 3
    // })
    // console.log(newArray)

    // if문엔 true false뿐만 아니라 존재여부에 따라서 조건으로도 가능함.
    if(contentObj){
        res.render("content", contentObj)
    }else{
        res.render("404")
    }

    // res.send("응답완료!")
})

app.get('/write',(req,res)=>{
    res.render("writeContent")
})

// 글 작성 - form 태그를 이용해서 요청
app.post('/blog/post',upload.single('img'),(req,res)=>{ // single("input name속성의 이름")
    console.log(req.body)
    /* [Object: null prototype] { title: 'fasds', content: 'asda' }
    
    여기서 잠깐?
    - \r = CR >> 이전 Mac OS 에서 줄 바꾸기 문자로 사용된 방식
    - \n = LF >> Unix, Mac OS에서 줄바꾸기 문자로 사용된 방식
    - \r\n / \r\n  =CR+LF >> 윈도우에서 줄바꾸기 문자로 사용
    */
    console.log(req.file) 
/* {
  fieldname: 'img',
  originalname: '26139_img.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: '26139_img1732933907468.png',
  path: 'uploads\\26139_img1732933907468.png',
  size: 469955
}*/
tempDB.push({
    contentID: tempDB.length === 0 ? 1 : tempDB[tempDB.length-1].contentID + 1,
    content : req.body.content,
    img: req.file ? "/" + req.file.path : null,
    title: req.body.title
})
console.log(tempDB)

res.redirect("/")  // 페이지 전환
})

// 글 삭제
app.delete('/blog/delete',(req,res)=>{
    console.log(req.query)
    // { contentID: '4' }
    const {contentID} = req.query  // '4'
    const Numberid = Number(contentID) //  4

    //tempDB에서 contentID에 대한 객체값을 삭제
    const tempDB2= tempDB.filter((data)=>{
        return data.contentID !== Numberid
    })
    tempDB = tempDB2

    // res.send("응답 완료")
    res.end();  // 초기화
})

app.listen(PORT,()=>{
    // ()=> {} 는 콜백함수
    console.log(`http://localhost:${PORT}`)
})
