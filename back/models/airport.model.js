const mongoose = require('mongoose');


const airportSchema = mongoose.Schema({
    startairport: { type: 'string', required: true },
    endairport: { type: 'string', required: true },
});

module.exports = mongoose.model('Airport', airportSchema);