const express= require("express")
const app = express()
const PORT = 8080

app.set("view engine","ejs")
app.set("views", "./views");

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const indexRouter = require("./routes")
app.use("/",indexRouter)

app.get("*", (req, res) => {
    res.send(`<h1>Page Not Found</h1>`);
  });

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`)
})