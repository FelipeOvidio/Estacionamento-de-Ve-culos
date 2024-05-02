require('dotenv').config();
const knex = require('./database/config')
const express = require('express');
const userRouter = require('./router/userRouter');
const clientRouter = require('./router/clientRouter');
const vehiclesRouter = require('./router/vehiclesRouter');
const app = express();

app.use(express.json());

app.use(userRouter)
app.use(clientRouter)
app.use(vehiclesRouter)

app.listen(process.env.PORT, () => {
    console.log("Serv Start");
})