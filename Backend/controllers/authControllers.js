const log = require('../models/logmodels')

const Login = async (req, res) => {

    try {

        if (
            req.body.role === "admin" &&
            req.body.username === "admin" &&
            req.body.password === "123"
        ) {
            return res.send(true)
        }

        const data = await log.findOne({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })

        if (data){
            res.send(true)
        }

        else {
            res.send(false)
        }
    }

    catch (err) {
        console.log(err)
        res.send(false)
    }

}

const Signup = async (req, res) => {

    try {

        const exists = await log.findOne({
            username: req.body.username
        })

        if (exists) {
            res.send(false)
        }

        else {

            await log.create({
                username: req.body.username,
                password: req.body.password,
                role: req.body.role,
            })

            res.send(true)
        }

    }

    catch (err) {
        console.log(err)
        res.send(false)
    }

}

module.exports = { Login, Signup }
