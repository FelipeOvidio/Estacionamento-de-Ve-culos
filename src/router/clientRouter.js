const express = require('express');
const { customers, addClient, updateClient, deleteClient } = require('../controller/clientControl');
const valdationRequest = require('../middleware/valdationRequest');
const schemaClient = require('../schemas/clientSchema');



const clientRouter = express();

clientRouter.get('/customers', customers)
clientRouter.post('/addClient', valdationRequest(schemaClient), addClient)
clientRouter.put('/updateClient/:id', updateClient)
clientRouter.delete('/deleteClient/:id', deleteClient)
module.exports = clientRouter