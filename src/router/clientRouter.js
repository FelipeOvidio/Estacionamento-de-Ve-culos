const express = require('express');
const { customers, addClient } = require('../controller/clientControl');



const clientRouter = express();

clientRouter.get('/customers', customers)
clientRouter.post('/addClient', addClient)

module.exports = clientRouter