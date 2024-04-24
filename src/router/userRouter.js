const express = require('express');
const { addUser, listUsers, loginUser, updateUser } = require('../controller/userControl');
const valdationRequest = require('../middleware/valdationRequest');
const schemaUser = require('../schemas/userSchema');
const validationLogin = require('../middleware/validationLogin');
const userRouter = express();

userRouter.post('/addUser', valdationRequest(schemaUser), addUser)
userRouter.post('/login', validationLogin, loginUser)
userRouter.put('/updateUser/:id', updateUser)
userRouter.get('/listUsers', listUsers)


module.exports = userRouter
