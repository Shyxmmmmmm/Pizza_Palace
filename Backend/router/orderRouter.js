const express = require("express")
const router = express.Router()
const {PlaceOrder,GetOrders,CreateOrder ,AdminOrders}= require("../controllers/orderController")

router.post("/CreateOrder", CreateOrder)
router.post("/PlaceOrder", PlaceOrder)
router.get("/GetOrders/:username", GetOrders)
router.get("/AdminOrders", AdminOrders)
module.exports = router