require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// Create app instance 
const app = express()

// Middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
// routes
app.use('/api/workouts',workoutRoutes)

// connect db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT,()=>{
            console.log('[==] Listen on port: ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
// listen for requests