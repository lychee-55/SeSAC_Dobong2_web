const User = require("../model/User")

// GET "/"
exports.main = (req,res)=>{
    res.render("index")
}

// POST "/login"
// 함수는 괄호 필요
exports.login = (req,res)=>{
    // console.log(req.body)
    // console.log("model>>>",User.getUserInfo())  // 함수호출
    
    // 객체 구조 분해 추가
    const{realID, realPW} = User.getUserInfo()  // { realID: 'lychee', realPW: '1234' }
    // console.log("-------")
    // console.log(realID,realPW)
    
    const {userId, userPw} = req.body
    if(realID===userId||realPW===userPw){
        res.send({ userInfo:req.body, isSuccess: true})
    }else{
        res.send({ isSuccess: false})
    }
}

// POST '/login2'
// 변수는 괄호 필요 없음.
exports.login2 = (req,res)=>{
    console.log(User.user)
    /*
    문자열 데이터를 원하는 대로 바꿔야 함
    apple//1234//사과사과
    banana//4321//바나나나나
    cocoa//qwer1234//미떼
    */
    const users = [] //[{realID,realPW,name},...]
    const userIds = [] //["apple","banana","cocoa"]
    const userData =User.user.split('\n')
    // console.log(userData)
    /* 위를 통해 데이터를 배열로 만들고 엔터를 기준으로 나눔
    [ 'apple//1234//사과사과', 'banana//4321//바나나나나', 'cocoa//qwer1234//미떼' ]
    */
   userData.forEach((user)=>{
       // user= "apple//1234//사과사과"
       const userInfoArr = user.split('//') // [banana,4321,바나나나나]
       const userObj = {
           realId:userInfoArr[0],
           realPw:userInfoArr[1],
           name:userInfoArr[2]
        }
        users.push(userObj)
        userIds.push(userInfoArr[0])
        // console.log('users',users)
        // console.log('userIds',userIds)
    })
/*---------------요청 정보를 바탕으로 회원이 맞는지 확인------------------ */
    const idx = userIds.indexOf(req.body.userId)  // req.body.userId는 클라이언트가 보내주는 정보
    // ["a","b","c"].indexOf("c"); // 2
    // ["a","b","c"].indexOf("d"); // -1
    // idx >= 0 userIds에 있는 회원
    // idx가 -1이라면 userIds에 없는 회원
    if (idx >= 0) {
        console.log("아이디가 있는 회원");
        if (req.body.userPw === users[idx].realPw) {
          console.log("비밀번호 일치");
          res.send({ isSuccess: true, userName: users[idx].name });
        } else {
          console.log("비밀번호 불일치");
          res.send({ isSuccess: false });
        }
      } else {
        console.log("아이디가 없는 회원");
        res.send({ isSuccess: false });
      }
    // res.send("Response!")
}