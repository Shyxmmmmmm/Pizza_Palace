const express = require("express")
const router = express.Router()
const Feedback = require("../controllers/feedbackController")
const feedback = require("../models/feedbackmodels")
router.post("/feedback", Feedback)
router.get("/GetFeedback", async(req,res)=>{
    try{
        const data = await feedback.find()
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router