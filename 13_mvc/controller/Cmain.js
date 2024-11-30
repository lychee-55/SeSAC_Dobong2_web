const Comment = require('../model/Comment')

// GET - /
exports.main=(req,res)=>{
    res.render("index");
};

// GET - /comments
exports.comments = (req,res)=>{
    console.log(Comment.commentInfos());
    res.render('comments',{commentInfos : Comment.commentInfos()})
}

// GET - /comment/:id
exports.comment = (req,res)=>{
    const comments = Comment.commentInfos();
    console.log(req.params)
    // console.log(req.query)
    const commentId = req.params.id; // 번호를 가지고 옴 
    console.log("commentId:",commentId)  // 1, 2, 3, 4
    
    console.log(Comment.commentInfos()[commentId - 1]) // id 2번이 나오기때문에 -1를 추가함.
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
}