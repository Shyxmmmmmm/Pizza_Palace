const express = require("express")
const router = express.Router()
const {PlaceOrder,GetOrders,CreateOrder}= require("../controllers/orderController")

router.post("/CreateOrder", CreateOrder)
router.post("/PlaceOrder", PlaceOrder)
router.get("/GetOrders", GetOrders)
router.get("/AdminOrders", GetOrders)
module.exports = router