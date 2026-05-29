const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors())
app.use(express.json())

const insertData = require("./insertData")

const authRoutes = require("./router/authRouter")
const feedbackRouter = require("./router/feedbackRouter")
const cartRouter = require("./router/cartRouter")
const pizzaRouter = require("./router/addPizza")
const orderRouter = require("./router/orderRouter")
const clearcartControllers = require("./controllers/clearcartControllers")

app.use(feedbackRouter)
app.use(authRoutes)
app.use(cartRouter)
app.use(pizzaRouter)
app.use(orderRouter)
app.delete("/ClearCart", clearcartControllers)

mongoose.connect("mongodb://127.0.0.1:27017/pizzashop")
    .then(() => {
        console.log("Db connected ")
    })
    .catch(() => {
        console.log("Db Not Connected")
    })

app.listen(3000, () => {
    console.log("Server Started...")
})