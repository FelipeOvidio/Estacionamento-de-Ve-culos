const express = require('express');
const { addUser, listUsers } = require('../controller/userControl');
const valdationRequest = require('../middleware/valdationRequest');
const schemaUser = require('../schemas/userSchema');
const userRouter = express();

userRouter.post('/addUser', valdationRequest(schemaUser), addUser)
userRouter.get('/listUsers', listUsers)


module.exports = userRouter
