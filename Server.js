const express = require('express')
const app=express()
const mongoose= require ('mongoose')
const DBconnection = require ('./Config/DB')
require ('dotenv').config()
const user = require('./Routes/UserRoute')
const product = require ('./Routes/ProductRoute')
const cookieParser = require('cookie-parser')
const order = require('./Routes/OrderRoute')







app.use(express.json());
app.use(cookieParser())
DBconnection()
app.use('/user',user)
app.use('/product',product)
app.use('/order',order)


app.listen(4000,()=>{
    console.log('server is running');
    
})