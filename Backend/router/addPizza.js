const express = require("express")
const router = express.Router()
const pizza = require("../models/pizzamodels")

router.get("/get", async (req, res) => {
    try {
        const data = await pizza.find()
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
})

router.put("/updatePizza/:id", async (req, res) => {

    try {

        await pizza.findOneAndUpdate(

            { id: req.params.id },

            {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
            }

        )

        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

})

module.exports = router