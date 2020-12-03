const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../keys')

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "Please fill the fields" })
    }

    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        // const { _id, name, email } = savedUser
                        res.json({ token })
                        // res.json({ message: "Successfully Login" })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Credentials" })

                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
})

router.post('/signup', (req, res) => {
    const { name, email, password, mobile } = req.body
    if (!email || !name || !password || !mobile) {
        return res.status(422).json({ error: "Please fill all Fields" })
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User Already Exist" })
            }
            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email,
                        password: hashedPassword,
                        name,
                        mobile
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "Succesfully Inserted" })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

        })
})

module.exports = router