const cart = require("../models/cartmodels")

const Addcart = async (req, res) => {
    try {
        await cart.create({
            id:req.body.id,
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            quantity: 1,
        })
        res.send(true)
    }
    catch (err) {
        res.send(false)
        console.log(err)
    }
}

const Getcart = async (req, res) => {
    try {
        const data = await cart.find()
        res.send(data)
    }
    catch (err) {
        console.log("error")
        res.send([])
    }
}

const DeleteCart = async (req, res) => {

    try {

        await cart.findByIdAndDelete(req.params.id)

        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

}

const IncreaseQty = async (req, res) => {

    try {
        await cart.findByIdAndUpdate(
            req.params.id,
            { $inc: { quantity: 1 } }
        )
        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

}

const DecreaseQty = async (req, res) => {

    try {

        const item = await cart.findById(req.params.id)

        if (item.quantity <= 1) {

            await cart.findByIdAndDelete(req.params.id)

        }

        else {

            await cart.findByIdAndUpdate(

                req.params.id,

                { $inc: { quantity: -1 } }

            )

        }

        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

}

module.exports = { Addcart, Getcart, DeleteCart, IncreaseQty, DecreaseQty }