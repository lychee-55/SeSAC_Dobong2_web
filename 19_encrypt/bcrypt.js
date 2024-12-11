const bcrypt = require("bcrypt")

const saltRounds = 10 // 숫자가 클수록 서버 성능이 저하됨.

function hashPw(pw){
    return bcrypt.hashSync(pw, saltRounds)
}

// 비밀번호 일치 여부 확인
function comparePw(inputPw, hashedPw){
    return bcrypt.compareSync(inputPw, hashedPw) // TRUE, FALSE  --- salt는 따로 저장 필요 없음.
}
const originalPw = "1234"
const hashedPw = hashPw(originalPw)
console.log("bcrypt 암호화된 비밀번호",hashedPw)

// 비밀번호 확인 
const isMatch = comparePw("1234",hashedPw)
const isMatch2 = comparePw("1234!",hashedPw)

console.log("비밀번호 일치? >>",isMatch)
console.log("비밀번호 일치? >>",isMatch2)