const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({ user }, "hdgahdgahjdgjgashgffgffdfgdfgdfd");
};

const register = async (req, res) => {
    const { name, email, password: plaintextpassword } = req.body;

    const password = await bcrypt.hash(plaintextpassword, 10);
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let newErrors;
            newErrors = errors.array().map((err) => {
                console.log("err", err);
                return { key: err.param, message: err.msg };
            });
            return res.status(400).send({ errors: newErrors });
        }
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user)
            return res.status(400).send({ message: "Please try another email" });

        user = await User.create({ name, email, password });




        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let newErrors;
            newErrors = errors.array().map((err) => {
                console.log("err", err);
                return { key: err.param, message: err.msg };
            });
            return res.status(400).send({ errors: newErrors });
        }
        const user = await User.findOne({ email }).lean().exec();

        if (!user)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        const token = newToken(user);

        res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports = { register, login };