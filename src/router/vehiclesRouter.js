const express = require('express')
const { listCars, addCar } = require('../controller/vehiclesControl')
const valdationRequest = require('../middleware/valdationRequest')
const vehicleSchema = require('../schemas/vehicleSchema')
const vehiclesRouter = express()

vehiclesRouter.get('/vehiclesList', listCars)
vehiclesRouter.post('/addVehicle', valdationRequest(vehicleSchema), addCar)

module.exports = vehiclesRouter