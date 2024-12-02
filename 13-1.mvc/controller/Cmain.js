const User = require("../model/login_things")

// GET - /
exports.main = (req,res)=>{
    res.render("index")
}

// POST - /axiosPost
exports.axiosPost = (req,res)=>{
    console.log(req.body)

    // 객체 구조 분해 추가
    const{realID, realPW} = User.getUserInfo()  // { realID: 'lychee', realPW: '1234' }
    
    // if(realID === req.body.userID && realPW === req.body.userPW){
    //     res.send({Success : true, userID : req.body.userID})
    // }else{
    //     res.send({Success: false})
    // }
}