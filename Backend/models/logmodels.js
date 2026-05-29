const mongoose = require("mongoose")

const log = mongoose.model("log", {
    username: String,
    password: String,
    role:String,
}, "login")

module.exports =log