const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config({ path: '.env' })
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)
app.listen(port, () => { console.log(`Server started on port ${port}`) })
