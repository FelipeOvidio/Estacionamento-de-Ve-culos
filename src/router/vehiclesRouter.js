const express = require('express')
const { listCars, addCar } = require('../controller/vehiclesControl')
const vehiclesRouter = express()

vehiclesRouter.get('/vehiclesList', listCars)
vehiclesRouter.post('/addVehicle', addCar)

module.exports = vehiclesRouter