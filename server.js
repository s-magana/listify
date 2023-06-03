const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const connectDB = require('./config/database')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(logger('dev'))

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    