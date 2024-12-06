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

/* /visitor/:id GET */
exports.getVisitor = (req,res)=>{
    console.log(req.params) // {id:"1"}
    console.log(req.params.id) // {"1"}
    Visitor.getVisitor(req.params.id, (result)=>{
        console.log("한 개의 데이터 Cvisitor.js:",result)
        res.send(result)
    })
    // res.send("response")
}

/* /visitor POST 등록 */
exports.postVisitor = (req,res)=>{
    console.log(req.body)
    Visitor.postVisitor(req.body,(result)=>{
        console.log("Cvisitor.js",result)
        res.send({id: result, comment: req.body.comment, name: req.body.name})
    })
}
/* /visitor DELETE 삭제 */
exports.deleteVisitor=(req,res)=>{
    console.log(req.body) // { id: '3' }
    console.log(req.body.id) // "3"
    Visitor.deleteVisitor(req.body.id,()=>{
        res.send(req.body.id + "+번 id삭제완료!")
    })
    // res.send("response!")
}

/* /visitor PATCH 수정 */
exports.patchVisitor=(req,res)=>{
    console.log(req.body)
    // res.send("response patch!")
    Visitor.patchVisitor(req.body,()=>{
        res.send("수정완료")
    })
}