import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js'
import cors from 'cors';
import { getUsers } from './Controllers/UsersController.js';


//Routes



const app = express()

app.use(cors())


//Middleware

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

dotenv.config()

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT, ()=> console.log(`Conectado en puerto: ${process.env.PORT}`)))
.catch((error) => console.log(error))


//usage of routes

app.use('/auth', AuthRoute)
//user x id
app.use('/user', UserRoute) 
//all users
app.use('/users', getUsers) 
//product x id

//all product
