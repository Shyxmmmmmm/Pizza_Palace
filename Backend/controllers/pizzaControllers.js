const pizza = require("../models/pizzamodels")

const AddPizza = async(req,res)=>{

    try{

        await pizza.create({
            
            name:req.body.name,
            price:req.body.price,
            category:req.body.category,
            image:req.body.image
        })
        res.send(true)
    }
    catch(err){
        console.log(err)
        res.send(false)
    }
}

module.exports = AddPizza