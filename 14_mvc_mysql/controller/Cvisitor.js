const Visitor = require("../model/Visitor")
// console.log(Visitor.getVisitors())

// GET / => localhost:PORT/
exports.main = (req,res)=>{
    res.render("index")
}

exports.getVisitors = (req,res)=>{
    // [DB 연결 전]
    // console.log(Visitor.getVisitors())
    // res.render('visitor',{data : Visitor.getVisitors()})  // 정보를 사용할 수 있도록 데이터로 넘김
    
    // [DB 연결 후]
    // (result)=>{}가 Visitor.js의 cb(rows)임.
    Visitor.getVisitors((result)=>{
        console.log("전체목록 Cvisitor.js",result)
        res.render("visitors",{data : result})
    })
}