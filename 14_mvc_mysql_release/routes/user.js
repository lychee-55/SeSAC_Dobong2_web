// TODO: 라우트 설정
const express = require("express")
const controller = require("../controller/Cuser")
const router = express.Router()
// GET /user
router.get("/", controller.main)
// GET /user/signup
router.get("/signup", controller.getSignup)
// POST /user/signup
router.post("/signup", controller.postSignup)
// GET /user/signin
router.get("/signin", controller.getSignin)
// POST /user/signin
router.post("/signin", controller.postSignin)

router.post("/profile", controller.profile)

router.patch("/profile/edit", controller.editProfile)

router.delete("/profile/delete", controller.deleteProfile)

module.exports = router