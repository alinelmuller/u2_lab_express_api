const express = require('express')
const mongoose = require('mongoose')
const db = require('./db')

const moviesRouter = require('./routes/movies')
const actorsRouter = require('./routes/actors')
const reviewsRouter = require('./routes/reviews')

const app = express()

app.use(express.json())


app.use('/movies', moviesRouter)
app.use('/actors', actorsRouter)
app.use('/reviews', reviewsRouter)


app.get('/', (req, res) => {
  res.send('Welcome to the Movies API!')
})


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})