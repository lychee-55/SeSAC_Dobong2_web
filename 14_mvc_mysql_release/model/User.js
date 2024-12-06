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

exports.getUsers = (data,cb) =>{
    conn.query(`SELECT * FROM user WHERE userid="${data.userid}"`,(err,rows)=>{
        if(err){
            throw err
        }
        console.log("User테이블의 해당하는 데이터조회: ",rows)
        cb(rows[0])
    })
}