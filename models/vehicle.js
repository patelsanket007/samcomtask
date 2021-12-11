const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    vehicle_name: {
        type: String
    },
    vehicle_brand: {
        type: String
    },
    vehicle_number: {
        type: String
    }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;