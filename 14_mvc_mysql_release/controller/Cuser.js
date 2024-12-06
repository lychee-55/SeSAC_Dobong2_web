// TODO: 컨트롤러 코드
const User = require("../model/User")

// GET /user
exports.main = (req,res) =>{
    res.render("index")
}
// GET /user/signup
exports.getSignup = (req,res) =>{
    res.render("signup")
}
// POST /user/signup
exports.postSignup = (req, res) => {
    console.log("POST 데이터:", req.body); // 디버깅용
    // res.send("res성공")
    User.userInfo(req.body, (result) => {
      console.log("회원가입 완료:", result);
    //   res.send({ isSuccess: true });
    });
    // res.render("signup")
  };

exports.getSignin = (req,res) =>{
    res.render("signin")
}

exports.postSignin = (req,res) =>{
    console.log("로그인 post",req.body)
    User.getUsers(req.body,(result)=>{
        console.log("해당목록 Cuser.js",result)
        res.send(result)
    })
    // res.render("profile")
}

exports.post_profile = (req,res) =>{
    console.log("profile로 post된 내용",req.body)
    User.getOneUser(req.body, (result)=>{
        console.log("해당목록 Cuser.js",result)
        res.render("profile",{data: result[0]})  // 이 result는 배열을 가져오기 때문에 [0]이 필요
    })
}
exports.editProfile = (req,res) =>{
    console.log("editProfile",req.body)
    User.editProfile(req.body,(result)=>{
        console.log("C 수정:",result)
        res.send("회원정보 수정 성공!")
    })
}
exports.deleteProfile = (req,res) =>{
}