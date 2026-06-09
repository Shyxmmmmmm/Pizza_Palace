const mongoose = require("mongoose")

const pizzaSchema = new mongoose.Schema({

    id:{
        type:String
    },

    name:{
        type:String
    },

    price:{
        type:Number
    },

    category:{type:String},

    image:{type:String}

})

module.exports = mongoose.model("pizza",pizzaSchema)