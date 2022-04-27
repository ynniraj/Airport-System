const Petdetail = require('../models/petdetails.model');

const createpetdetail = async (req, res) => {
    try {
        const petshop = await Petdetail.create(req.body);

        return res.status(200).send({ petshop, status: "ok" });
    } catch (error) {
        return res.status(404).json({ status: "error" });
    }
};
module.exports = { createpetdetail };