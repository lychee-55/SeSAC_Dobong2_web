const User =  require("../model/User")

// GET - /user
exports.getUser = (req,res)=>{
    console.log(User.userInfo()) // {}객체값
    // res.send("응답 완료!")
    // const users = User.userInfo()

    res.render("user",{
        // userInfo: users
        ...User.userInfo()
        /*
        - { realId: 'cocoa', realPw: 'qwer1234*', name: '홍길동', age: 20 }

        {userInfo : User.userInfo()} ===
        {userInfo : { 
        realId: 'cocoa', 
        realPw: 'qwer1234*', 
        name: '홍길동', 
        age: 20 }
        }
        */
    })
};