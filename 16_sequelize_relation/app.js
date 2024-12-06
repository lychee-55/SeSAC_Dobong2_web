const express = require("express");
const app = express();
const PORT = 8080;
const {sequelize} = require("./models")
// db={sequelize:~~~, Sequelize:~~~} --> 앞에 있는 sequelize만 가지고 오기 위해 객체구조 분해를 실행
// const {sequelize} = db

// 미들웨어처리
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTER 설정
const indexRouter = require("./routes")
app.use("/",indexRouter)

// sync()
sequelize
    .sync({ force:false })
    .then(()=>{
        console.log("DB connection success!")
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`)
        })
    }).catch((err)=>{
        console.log("db connection error!")
        console.log(err)
    })
