const mysql = require("mysql")
const conn = mysql.createConnection({
    host:"127.0.0.1", // 혹은 localhost
    user:"sesac", // 보통 사용 안 하는게 좋음
    password:"1234",
    database:"sesac"
})

exports.getVisitors = (cb) => {
    /* DB 연결전 */
    // return[
    //     {id: 1, name: "홍길동", comment:"내가왔다."},
    //     {id: 2, name: "이찬혁", comment:"으라차차"}
    // ]

    /* DB 연결 후 */
    conn.query(`SELECT * FROM visitor`,(err,rows) => {
        if(err){
            throw err // 에러를 만들어 주는 문장
        }
        console.log('visitor 테이블의 전체조회:',rows)

        cb(rows)
    })
}