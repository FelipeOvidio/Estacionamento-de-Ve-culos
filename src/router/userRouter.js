const express = require('express');
const { addUser, listUsers, loginUser, updateUser, deleteuser } = require('../controller/userControl');
const valdationRequest = require('../middleware/valdationRequest');
const schemaUser = require('../schemas/userSchema');
const validationLogin = require('../middleware/validationLogin');
const userRouter = express();

userRouter.post('/addUser', valdationRequest(schemaUser), addUser)
userRouter.post('/login', validationLogin, loginUser)
userRouter.get('/listUsers', listUsers)
userRouter.put('/updateUser/:id', updateUser)
userRouter.delete('/deleteUser/:id', deleteuser)



module.exports = userRouter
