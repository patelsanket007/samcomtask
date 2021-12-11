const express = require('express');
const router = express.Router();
const userOwnVehicle = require('../../controller/userOwnVehicle');
const vehicle = require('../../controller/vehicle');

// Add the user route.
router.post('/createUser', userOwnVehicle.createUser);



// Add vehicle details route.

router.post('/createVehicle', vehicle.createVehicle);
router.post('/createOwner', vehicle.createOwnership);

// Fetch route
router.get('/user_owned_vehicle/:userId', vehicle.fetchVehicle);

//
router.post('/vehicles', vehicle.fetchVehicleAndPaginate);




module.exports = router;