const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());
const connect = require('./db/db');


const { createflight, flightbyname, allflights } = require("./controllers/flight.controller")


app.post("/createflight", createflight)
app.get("/flightbyname", flightbyname)
app.get("/allflights", allflights)




app.listen(process.env.PORT || 8080, async () => {
    try {
        await connect()
        console.log("server is running on port 8080");
    }
    catch (e) {
        console.log(e)
    }
})