const express = require('express')
const { listCars, addCar, exitVehicle, registerVehicles } = require('../controller/vehiclesControl')
const valdationRequest = require('../middleware/valdationRequest')
const vehicleSchema = require('../schemas/vehicleSchema')
const registerExit = require('../schemas/vehicleSchema')
const vehiclesRouter = express()

vehiclesRouter.get('/vehiclesList', listCars)
vehiclesRouter.get('/registerVehicles', registerVehicles)
vehiclesRouter.post('/addVehicle', valdationRequest(vehicleSchema), addCar)
vehiclesRouter.delete('/exitVehicle/:id', valdationRequest(registerExit), exitVehicle)

module.exports = vehiclesRouter