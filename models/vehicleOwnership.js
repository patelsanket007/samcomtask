const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleOwnership = new Schema({
    vahicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const VehicleOwnerShip = mongoose.model('VehicleOwnerShip', vehicleOwnership);

module.exports = VehicleOwnerShip;