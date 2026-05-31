const mongoose = require("mongoose")

const log = mongoose.model("log", {
    username: String,
    password: String,
    role:String,
    email: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    }
}, "login")

module.exports =log