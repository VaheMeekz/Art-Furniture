const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models").User;

router.get('/', async function (req, res) {
    return res.send("hello bea")
})

router.post('/register', async (req, res) => {
    const {name, password, email, phone, seqPhone} = req.body
    try {
        if (!(email && password && name && phone)) {
            return res.json({
                error: ['Name, password and email are required fields'],
            })
        }
        const oldUser = await User.findOne({
            where: {email},
        })

        if (oldUser) {
            return res.json({
                error: ['User with this email already exists'],
            })
        }

        let encryptedPassword = await bcrypt.hash(password, 10)

        let user
        try {
            user = await User.create({
                name: name,
                email: email.toLowerCase(),
                password: encryptedPassword,
                phone: phone,
                seqPhone: seqPhone
                // basketId:DataTypes.INTEGER
            })
        } catch (e) {
            return res.json({error: e.errors.map((i) => i.message)})
        }

        const token = jwt.sign({user_id: user.id}, process.env.TOKEN_KEY, {
            expiresIn: '2h',
        })
        // save user token
        user.token = token
        user.save()
        return res.status(201).json(user)
    } catch (err) {
        // TODO: add error handling
        console.log(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email, password)
        if (!(email && password)) {
            return res.json({
                error: ['Password and email are required fields'],
            })
        }
        const user = await User.findOne({
            where: { email },
        })
        console.log(user)
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                },
            )
            user.token = token
            return res.status(200).json(user)
        }

        return res.json({ error: ['Invalid credentials'] })
    } catch (err) {
        return res.json({ error: ['Error'] })
    }
})

module.exports = router;