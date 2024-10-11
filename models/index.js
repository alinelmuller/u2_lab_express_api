const mongoose = require('mongoose')
const movieSchema = require('./movieSchema')
const actorSchema = require('./actorSchema')
const reviewSchema = require('./reviewSchema')

const Movie = mongoose.model('Movie', movieSchema)
const Actor = mongoose.model('Actor', actorSchema)
const Review = mongoose.model('Review', reviewSchema)



module.exports = { Movie, Actor, Review }