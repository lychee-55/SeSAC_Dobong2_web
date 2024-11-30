const User = require("../model/login_things")

// GET - /
exports.main = (req,res)=>{
    res.render("index")
}

// POST - /axiosPost
exports.axiosPost = (req,res)=>{

    if(realID === req.body.userID && realPW === req.body.userPW){
        res.send({Success : true, userID : req.body.userID})
    }else{
        res.send({Success: false})
    }
}