const Vehicle = require('../models/vehicle');
const Owner = require('../models/vehicleOwnership');

// Add vehicle details to the database.
exports.createVehicle = (req, res) => {
    const vehicle = new Vehicle(req.body);
    vehicle.save()
    .then((result) => {
        return res.status(200).json({
            message: 'Vehicle created!!',
            vehicle: result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err
        })
    })
}

// Defining the connection between user and vehicle in vehivle ownership collection.

exports.createOwnership = (req, res) => {
    const owner = new Owner(req.body);
    owner.save()
    .then((result) => {
        return res.status(200).json({
            message: 'Success',
            data: result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err
        })
    })
}

// Fetch all the vehice details owned by the particular user.

exports.fetchVehicle = (req, res) => {
    const userId = req.params.userId;
    Owner.find({ user: userId }).populate('vahicle')
    .then((vehicle) => {
        return res.status(200).json({
            message: 'vehicle fetch success',
            vehicle: vehicle
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    })
}

// Fetch vehicle and pagination.

exports.fetchVehicleAndPaginate = (req, res) => {
    Owner.find()
    .populate('vahicle')
    .populate('user')
    .limit(5)
    .skip(req.body.skip)
    .then((result) => {
        return res.status(200).json({
            message: 'vehicle fetch success',
            data: result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    })
}

