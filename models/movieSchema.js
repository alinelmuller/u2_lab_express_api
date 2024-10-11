const { Schema } = require('mongoose')

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  runtime: {
    type: Number, 
    required: true
  },
  rating: {
    type: String, 
    required: true,
  },
  yearReleased: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  posterImage: {
    type: String, 
    default: 'default-poster.jpg'
  },
  actors: {
    type: Schema.Types.ObjectId,
    ref: 'Actor' // Reference to the Actors collection
  }
})

module.exports = MovieSchema