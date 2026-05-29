const transporter = require("../config/mailer")

const feedback = require("../models/feedbackmodels")

const Feedback = async (req, res) => {

    try {
        // Save Feedback in MongoDB
        await feedback.create({
            email: req.body.email,
            message: req.body.message,
            rating:req.body.rating
        })

        // Send Mail

        await transporter.sendMail({

            from: process.env.MAIL_USER,

            to: process.env.MAIL_USER,

            subject: "Pizza Palace Feedback",

            text: `
            User Email: ${req.body.email}
            Message: ${req.body.message}
            rating:${req.body.rating}
            `
        })

        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

}

module.exports = Feedback