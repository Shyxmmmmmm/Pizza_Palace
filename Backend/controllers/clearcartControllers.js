const cart = require("../models/cartmodels")

const clearcartControllers = async (req, res) => {

    try {

        await cart.deleteMany()

        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

}

module.exports = clearcartControllers