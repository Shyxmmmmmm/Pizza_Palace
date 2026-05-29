const mongoose=require("mongoose")

const cart=mongoose.model("cart",{
    id:String,
    name: String,
    price: String,
    img: String,
    quantity: Number
})

module.exports=cart