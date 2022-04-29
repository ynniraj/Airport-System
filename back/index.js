const express = require('express');
const cors = require('cors');
const { body, validationResult } = require("express-validator");
const app = express();
app.use(express.json())
app.use(cors());
const connect = require('./db/db');


const { createflight, flightbyname, allflights } = require("./controllers/flight.controller")

const { register, login } = require("./controllers/user.controller");

app.post("/createflight", createflight)
app.get("/flightbyname", flightbyname)
app.get("/allflights", allflights)

app.post("/register", body("name").isAlpha().isString().isLength({ min: 3 }).withMessage("first name is required and minum length should be 3"),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }).withMessage("password is required and length should be 6"), register)
app.post("/login", body("email").isEmail().withMessage("Email is required and should be valid"),
    body("password").isLength({ min: 6 }).withMessage("password is required and length should be 6"), login)


app.listen(process.env.PORT || 8080, async () => {
    try {
        await connect()
        console.log("server is running on port 8080");
    }
    catch (e) {
        console.log(e)
    }
})