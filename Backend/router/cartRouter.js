const express = require("express")
const router = express.Router()
const { Addcart, Getcart ,DeleteCart ,IncreaseQty ,DecreaseQty } = require("../controllers/cartControllers")

router.post("/Addcart", Addcart)
router.get("/Getcart", Getcart)
router.delete("/DeleteCart/:id", DeleteCart)
router.put("/Increase/:id", IncreaseQty)
router.put("/Decrease/:id", DecreaseQty)

module.exports = router