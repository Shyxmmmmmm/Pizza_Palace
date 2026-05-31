const express = require("express")
const router = express.Router()
const { Login, Signup ,GetProfile,UpdateProfile} = require("../controllers/authControllers")

router.post("/Login", Login)
router.post("/Signup", Signup)
router.get("/Profile/:username", GetProfile)
router.put("/UpdateProfile", UpdateProfile)

module.exports = router