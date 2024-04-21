require('dotenv').config();
const knex = require('./database/config')
const express = require('express');
const userRouter = require('./router/userRouter');
const app = express();

app.use(express.json());

app.use(userRouter)

app.listen(process.env.PORT, () => {
    console.log("Serv Start");
})