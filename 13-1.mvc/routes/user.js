const express = require("express")
const router = express.Router()
const controller = require("../controller/Cmain")


router.get('/',controller.main)

router.post('/axiosPost',controller.axiosPost)

module.exports = router;