const models = require("../models/User")

exports.main = (req,res)=>{
    res.render("index")
}

exports.getLogin = (req,res)=>{
    res.render("login")
}

exports.postLogin = (req,res)=>{
}