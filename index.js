const booksRoutes = require('./controllers/books')

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()



//MIDDLEWARE - always above routes
app.use(express.json())

//Routes
app.use('/books', booksRoutes)

// db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on port ${3000}`))