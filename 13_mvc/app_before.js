const express = require("express");
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const comments = [
    {id:1, userid: 'apple', date: '2024-11-23', comment: "안녕하세요~~~~~!!"},
    {id:2, userid: 'banana', date: '2024-10-23', comment: "배고파~~~~~!!"},
    {id:3, userid: 'cocoa', date: '2024-10-23', comment: "안녕~~~~~!!"},
    {id:4, userid: 'donut', date: '2024-12-23', comment: "반가워요~~~~~!!"}
]

app.get('/',(req,res)=>{
    res.render("index")
});

app.get('/comments',(req,res)=>{
    console.log(comments)
    res.render('comments',{commentInfos : comments})
});

// 여러개를 하나로 처리
// get은 data의 query로 받거나 params로 받을 수 있음.
// url 다음을 params로 연결할 수 있음.
app.get('/comment/:id',(req,res)=>{
    console.log(req.params)
    // console.log(req.query)
    const commentId = req.params.id; // 번호를 가지고 옴 
    console.log("commentId:",commentId)  // 1, 2, 3, 4
    
    console.log(comments[commentId - 1]) // id 2번이 나오기때문에 -1를 추가함.
    // res.send("응답완료!")
    /* ---------------예외 처리!!!----------- */
    // 댓글수량보다 더 큰 숫자를 넣을 때
    if(commentId<1||commentId > comments.length){
        res.render("404")
    }
    // 숫자가 아닐 때
    if(isNaN(commentId)){
        res.render("404")
    }

    res.render("comment",{commentInfo: comments[commentId - 1]})
})

// [404 ERROR]
// 반드시 맨 마지막 라우트로 선언
app.get("*",(req,res)=>{
    res.render("404")    
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});