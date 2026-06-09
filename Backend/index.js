const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors())
app.use(express.json())
require("dotenv").config()


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
mongoose.connect(process.env.MONGO_URL)
  .then(async() => {
    console.log("Db connected")
      
  })
  .catch((err) => {
    console.log("Db Not Connected")
    console.error(err)
  })

app.listen(3000, () => {
    console.log("Server Started...")
})