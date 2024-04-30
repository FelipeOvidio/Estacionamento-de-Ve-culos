const express = require('express');
const { addClient, listCustomers } = require('../controller/clientControl');
const clientRouter = express();

clientRouter.post('/addCliente', addClient)
clientRouter.get('/customers', listCustomers)

module.exports = clientRouter