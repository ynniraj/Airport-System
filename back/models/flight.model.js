const mongoose = require('mongoose');


const flightSchema = mongoose.Schema({
    airline: { type: 'string', required: true },
    startairport: { type: 'string', required: true },
    connecting: { type: 'string', required: false, default: "Non-Stop" },
    endairport: { type: 'string', required: true },
    cost: { type: 'Number', required: true },
    starttime: { type: 'string', required: true },
    endtime: { type: 'string', required: true },
    pnr: { type: 'string', required: false, default: Date.now() },
    capacity: { type: 'string', required: true },
});

module.exports = mongoose.model('Flight', flightSchema);