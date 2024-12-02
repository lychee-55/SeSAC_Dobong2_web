const express = require("express")
const controller = require("../controller/Cuser")
const router = express.Router()

// 실습1
router.get("/",controller.main)
router.post("/login",controller.login)

// 실습2
router.post("/login2", controller.login2)

module.exports = router