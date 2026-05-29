const express = require("express")
const router = express.Router()
const { Login, Signup } = require("../controllers/authControllers")

router.post("/Login", Login)
router.post("/Signup", Signup)

module.exports = router