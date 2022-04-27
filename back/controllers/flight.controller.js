const Flight = require('../models/flight.model');

const createflight = async (req, res) => {
    try {
        const flights = await Flight.create(req.body);

        return res.status(200).send({ flights, status: "ok" });
    } catch (error) {
        return res.status(404).json({ status: "error" });
    }
};


const flightbyname = async (req, res) => {
    const startairports = req.query.startairport
    const endairports = req.query.endairport
    try {
        const flights = await Flight.find({ startairport: startairports, endairport: endairports }).lean().exec()
        return res.status(200).send(flights);
    } catch (err) {
        return res.status(500).send(err)
    }
}

const allflights = async (req, res) => {

    try {
        const flights = await Flight.find().lean().exec()
        return res.status(200).send(flights);
    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports = { allflights, createflight, flightbyname };