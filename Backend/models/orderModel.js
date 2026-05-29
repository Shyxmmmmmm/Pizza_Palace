const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({

    orderId: String,

    customerName: String,

    items: Array,

    totalAmount: Number,

    paymentMethod: String,

    status: String

})

module.exports = mongoose.model("Order", orderSchema)