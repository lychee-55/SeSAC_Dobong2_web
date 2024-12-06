// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql")
const conn = mysql.createConnection({
    host:"127.0.0.1",
    user:"sesac",
    password:"1234",
    database:"sesac"
})
// // 회원가입 데이터 삽입
exports.userInfo = (data, cb) => {
    conn.query(
      `INSERT INTO user VALUES(null,"${data.userid}","${data.name}","${data.pw}")`,
      (err, rows) => {
        if (err) throw err;
  
        cb(rows);
      }
    );
  };

  // 데이터 조회
exports.getUsers = (data,cb) =>{
    conn.query(`SELECT * FROM user WHERE userid="${data.userid}"`,(err,rows)=>{
        if(err){
            throw err
        }
        console.log("User테이블의 해당하는 데이터조회: ",rows)
        cb(rows[0])
    })
}

// 특정 회원정보 조회 
exports.getOneUser = (data, cb)=>{
  conn.query(`SELECT * FROM user WHERE userid="${data.userid}"`,(err,rows)=>{
    if(err) throw err
    console.log("특정 데이터만 가져온 결과",rows)
    cb(rows)
  })
}

exports.editProfile = (data, cb)=>{
  conn.query(`UPDATE user SET name="${data.name}", pw="${data.pw}" WHERE id="${data.id}"`,(err,rows)=>{
    if (err) throw err
    console.log("선택 프로필 수정:",rows)
    cb()
  })
}