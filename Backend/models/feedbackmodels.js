const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({

    email:{
        type:String
    },

    message:{
        type:String
    },

    rating:{
        type:Number
    }


})

module.exports = mongoose.model("feedback",feedbackSchema)