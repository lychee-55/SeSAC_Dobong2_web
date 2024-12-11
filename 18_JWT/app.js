const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
const SECRET = "NfgVbiMx4N3DydIg"  // .env에 저장해서 사용


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//DB 정보
const userInfo = {
  id: "cocoa",
  pw: "1234",
  name: "코코아",
  age: 18,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login",(req,res)=>{
    try{

        console.log("app.js-req.body: ",req.body) //app.js-req.body:  { id: '', pw: '' }
        
        const {id,pw} = req.body
        const {id:realId, pw:realPw} = userInfo
        
        if(id===realId && pw === realPw){
            // 로그인 성공
            // jwt 발급
            // token 발급은 서버에서, token관리는 클라이언트에서 한다
            const token = jwt.sign({ id },SECRET) // jwt.sign(페이로드, 비밀키) -- 작성필수  //# "."을 기준으로 두번째는 페이로드값, 세번째는 비밀키 값임.
            console.log("token!! >>", token)
            // jwt는 클라이언트에서 관리하기 때문에, 클라이언트에게 토큰을 보내주어야함.
            res.send({result:true, token})
        }else{
            // 로그인 실패
            res.send({message:"로그인 정보가 올바르지 않습니다!", result:false})
        }
    }catch(err){
        console.log("post /login err",err)
        res.status(500).send({message:"서버에러"})
    }
})

app.post("/token",(req,res)=>{
    try{
        // console.log(req.headers)
        console.log(req.headers.authorization) // Bearer sdfs.sdfs.sdf
        if(req.headers.authorization){

            const token = req.headers.authorization.split(" ")[1]
            console.log(token)
            try{
                // 토큰 검증 작업
                const auth = jwt.verify(token,SECRET)  // jwt.sign()과 jwt.verify() 괄호 안은 같아야함(특히 비밀키)
                console.log(auth)
                // { id: 'cocoa', iat: 1733894257 }  -- iat = issue at
                if(auth.id===userInfo.id){
                    res.send({result:true, name:userInfo.name})
                }
            }catch(err){
                console.log("토큰 인증 에러")
                res.status(401).send({ result : false, message : "인증된 회원이 아닙니다." })
            }
        }else{
            // 인증정보가 없을 때
            res.redirect("/login")
        }
    }catch(err){
        console.log("post /login err",err)
        res.status(500).send({message:"서버에러"})
    }
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});