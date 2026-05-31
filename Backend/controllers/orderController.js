const Order = require("../models/orderModel")
const Razorpay = require("razorpay")

const razorpay = new Razorpay({

    key_id: process.env.RAZORPAY_KEY_ID,

    key_secret: process.env.RAZORPAY_SECRET

})

const CreateOrder = async (req, res) => {

    try {

        const options = {

            amount: req.body.amount * 100,

            currency: "INR"

        }

        const order = await razorpay.orders.create(options)

        res.send(order)

    }

    catch (err) {

        console.log(err)

    }

}

const PlaceOrder = async (req, res) => {

    console.log(req.body)

    try {

        await Order.create({

            orderId: "#PP" + Math.floor(Math.random() * 1000),

            customerName: req.body.customerName,

            items: req.body.items,

            totalAmount: req.body.totalAmount,

            paymentMethod: req.body.paymentMethod,

            status: "Preparing"

        })

        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

}

const GetOrders = async (req, res) => {

    try {

        const username = req.params.username

        const data = await Order.find({
            customerName: username
        })

        res.send(data)

    }

    catch (err) {

        console.log(err)

    }

}

module.exports = { PlaceOrder, GetOrders, CreateOrder }