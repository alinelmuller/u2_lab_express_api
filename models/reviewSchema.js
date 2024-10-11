const { Schema } = require('mongoose')

const ReviewSchema = new Schema({
    movie: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
      required: true
    },
    score: {
      type: Number,
      required: true,
      min: 0,  // Minimum score value
      max: 100 // Maximum score value, assuming a 0-100% system
    },
    comment: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
      default: Date.now // Auto-generates the date of review creation
    }
  });
  
  module.exports = ReviewSchema