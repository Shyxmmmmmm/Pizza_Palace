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

const GetProfile = async (req, res) => {

    try {

        const data = await log.findOne({
            username: req.params.username
        })

        res.send(data)

    }

    catch (err) {

        console.log(err)

        res.send(null)

    }

}

const UpdateProfile = async (req, res) => {

    try {

        await log.findOneAndUpdate(

            { username: req.body.username },

            {

                email: req.body.email,

                phone: req.body.phone

            }

        )

        res.send(true)

    }

    catch (err) {

        console.log(err)

        res.send(false)

    }

}

module.exports = {Login,Signup,GetProfile,UpdateProfile}
