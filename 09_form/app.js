const express = require("express");
const app = express();
const PORT = 8080;

// ejs views 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); //뷰파일 폴더 경로 설정

// 정적파일 관리
// app.use("/static", express.static(__dirname + "/public"));

// body-parser설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // json형식으로 주고 받겠다

/* 요청 > 응답 */
app.get("/", function (req, res) {
  console.log("nodemon 실행!!");
  res.render("index"); // /경로로 들어오면 index.ejs를 보여주는 중, views로 설정을 해줬기에 .ejs안 써도 됨.
});

// form GET 요청
app.get("/getForm", function (req, res) {
  // get은 form method, /getForm은 form action
  console.log(req.query); // form에 작성한 내용을 query로 출력되게 하는 중
  //   res.send("form data get 요청 성공!"); // 응답과 함꼐 응답이 종료됨을 알리는 중
  // title "GET"
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
});

// form POST 요청
app.post("/postForm", function (req, res) {
  console.log(req.body);
  // res.send("form data post 요청 성공!");
  res.render("result", {
    // render는 파일을 응답해주고 있음, 해당 파일을 선택
    title: "POST",
    userInfo: req.body, //if문을 사용해 email을 넣고 빼기
  });
});

// form validation post 요청
app.post("/js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사");
});

/* 실습문제 */
// /practice1으로 들어갔을때, practice1.ejs를 화면에 보여줘야함
// /practice2으로 들어갔을때, practice2.ejs를 화면에 보여줘야함
// practice1,practice2.ejs에는 각각 get,post를 통한 폼 요청이 있고
// 결과 페이지는 practice_result.ejs를 공통으로 사용

// 1. /practice1에 대한 GET 요청
app.get("/practice1", (req, res) => {
  console.log(req.query);
  res.render("practice/practice1");
});

// 2. /practice2에 대한 GET요청
app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});

// 3. 주소 지정 form GET 요청

// 4. 주소 지정 form POST 요청

// API 4개 작업해야함

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
