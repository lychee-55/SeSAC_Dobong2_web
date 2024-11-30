const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser")

// GET - /user  (/user경로이지만 여기선 /user라고 하지 않음, 왜?)
router.get("/",controller.getUser)  // 호출하면 안됨. 괄호 사용 x --괄호는 함수
// GET - /user/aa
// router.get("/aa", controller.a)

// POST - /user/login
// router.post("/login", controller.login)
module.exports = router;