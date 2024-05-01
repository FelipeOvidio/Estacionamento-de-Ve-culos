const express = require('express');
const { customers, addClient } = require('../controller/clientControl');
const valdationRequest = require('../middleware/valdationRequest');
const schemaClient = require('../schemas/clientSchema');



const clientRouter = express();

clientRouter.get('/customers', customers)
clientRouter.post('/addClient', valdationRequest(schemaClient), addClient)

module.exports = clientRouter